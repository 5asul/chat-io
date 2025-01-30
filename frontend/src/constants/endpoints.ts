// src/components/constants/endpoints.ts

const baseUrl = "http://localhost:4000"
export const ENDPOINTS = {
  
    LOGIN: `${baseUrl}/api/auth/login`,
    REGISTER: `${baseUrl}/api/auth/register`,
    CHAT_ROOMS: `${baseUrl}/api/chat-rooms`,
    MESSAGES: `${baseUrl}/api/messages`,
  };