"use client"
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Send } from "lucide-react";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
export default function Form() {
    const [message, setMessage] = useState<string>("");
    const handleMessageSend = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() === "") return;
        // Add logic to send the message
        console.log("Message sent:", message);
        setMessage("");
      };
    
      const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
      };
    return ( 
        <form onSubmit={handleMessageSend} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={handleInputChange}
              className="flex-1"
            />
            <Button type="submit">
              <Send className="h-5 w-5" />
            </Button>
          </form>
     );
}
