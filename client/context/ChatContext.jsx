/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import toast from 'react-hot-toast';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [unseenMessages, setUnseenMessages] = useState({});

	const { socket, axios } = useContext(AuthContext);

	// Get all users for sidebar
	const getUsers = async () => {
		try {
			const { data } = await axios.get('/api/messages/users');
			if (data.success) {
				setUsers(data.users);
				setUnseenMessages(data.unseenMessages);
			}
		} catch (err) {
			toast.error(err.message);
		}
	};

	// Get messages for selected user
	const getMessages = async (userId) => {
		try {
			const { data } = await axios.get(`/api/messages/${userId}`);
			if (data.success) {
				setMessages(data.messages);
			}
		} catch (err) {
			toast.error(err.message);
		}
	};

	// Send message to selected user
	const sendMessage = async (messageData) => {
		try {
			const { data } = await axios.post(`/api/messages/send/${selectedUser._id}`, messageData);
			if (data.success) {
				setMessages((prevMessages) => [...prevMessages, data.newMessage]);
			} else {
				toast.error(data.message);
			}
		} catch (err) {
			toast.error(err.message);
		}
	};

	//  Subscribe to messages for selected user
	const subscribeToMessages = async () => {
		if (!socket) return;
		socket.on('newMessage', (newMessage) => {
			if (selectedUser && newMessage.senderId === selectedUser._id) {
				newMessage.seen = true;
				setMessages((prevMessages) => [...prevMessages, newMessage]);
				axios.put(`/api/messages/mark/${newMessage._id}`);
			} else {
				setUnseenMessages((prevUnseenMessages) => ({
					...prevUnseenMessages,
					[newMessage.senderId]: prevUnseenMessages[newMessage.senderId]
						? prevUnseenMessages[newMessage.senderId] + 1
						: 1,
				}));
			}
		});
	};

	// Unsubscribe from messages
	const unsubscribeToMessages = () => {
		if (socket) socket.off('newMessages');
	};

	useEffect(() => {
		subscribeToMessages();
		return () => unsubscribeToMessages();
	}, [socket, selectedUser]);

	const value = {
		messages,
		setMessages,
		users,
		selectedUser,
		setSelectedUser,
		getUsers,
		sendMessage,
		unseenMessages,
		setUnseenMessages,
	};
	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
