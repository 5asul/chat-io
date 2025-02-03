// src/components/constants/endpoints.ts

const BASE_URL = process.env.BASE_URL || 'http://localhost:4000';

export const ENDPOINTS = {
  
    LOGIN: `${BASE_URL}/api/auth/login`,
    REGISTER: `${BASE_URL}/api/auth/register`,
    CHAT_ROOMS: `${BASE_URL}/api/chat-rooms`,
    MESSAGES: `${BASE_URL}/api/messages`,
  };