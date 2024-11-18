import Form from "./Form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone,Video,MoreVertical } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";


interface Contact {
  id: number;
  name: string;
  avatar: string;
  status: string;
}

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
}

export default function ChatApp() {
 

  const contacts: Contact[] = [
    { id: 1, name: "Alice Smith", avatar: "/placeholder.svg?height=32&width=32", status: "online" },
    { id: 2, name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32", status: "offline" },
    { id: 3, name: "Charlie Brown", avatar: "/placeholder.svg?height=32&width=32", status: "online" },
    { id: 4, name: "Diana Prince", avatar: "/placeholder.svg?height=32&width=32", status: "offline" },
  ];

  const messages: Message[] = [
    { id: 1, sender: "Alice Smith", content: "Hey there! How are you doing?", time: "10:00 AM" },
    { id: 2, sender: "You", content: "Hi Alice! I'm doing great, thanks for asking. How about you?", time: "10:05 AM" },
    { id: 3, sender: "Alice Smith", content: "I'm good too! Just working on some projects. Any plans for the weekend?", time: "10:10 AM" },
    { id: 4, sender: "You", content: "Thinking of going hiking. Want to join?", time: "10:15 AM" },
    { id: 5, sender: "Alice Smith", content: "That sounds fantastic! I'd love to join. Where are you planning to go?", time: "10:20 AM" },
  ];



  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-73px)]">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Avatar className="h-10 w-10">
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback>
                  {contact.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.status}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white p-4 flex items-center justify-between border-b">
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src={contacts[0].avatar} alt={contacts[0].name} />
              <AvatarFallback>
                {contacts[0].name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <p className="font-medium">{contacts[0].name}</p>
              <p className="text-sm text-gray-500">{contacts[0].status}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"} mb-4`}>
              <div className={`max-w-[70%] p-3 rounded-lg ${msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                <p>{msg.content}</p>
                <p className={`text-xs mt-1 ${msg.sender === "You" ? "text-blue-100" : "text-gray-500"}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Message Input */}
        <div className="bg-white p-4 border-t">
          <Form/>
        </div>
      </div>
    </div>
  );
}
