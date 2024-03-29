package ch.juniordev.projects.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;



@Controller
public class ChatMessageController {

    @MessageMapping("/chat")
    @SendTo("/topic/messages")


    public ChatMessage get(ChatMessage chatMessage) {
        return new ChatMessage(chatMessage.getValue() + " to jest z GUI");
    }
}
