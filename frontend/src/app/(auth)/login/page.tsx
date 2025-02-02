"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState<string | null>(null);
  const { login, logError, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
      setError(logError);
      router.push("/");
    } catch (err) {
      setError((err as Error).message || "Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md m-32 mx-auto p-8 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-600 transition"
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
      {logError && <div className="text-red-500 text-xs">{logError}</div>}
    </form>
  );
};

export default LoginForm;
