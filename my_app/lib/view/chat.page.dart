import 'package:flutter/material.dart';
import 'package:grouped_list/grouped_list.dart';

class ChatPage extends StatefulWidget {
  const ChatPage({super.key});

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class Message {
  final String text;
  final DateTime date;
  final bool inSentByMe;

  Message({required this.text, required this.date, required this.inSentByMe});
}

class _ChatPageState extends State<ChatPage> {
  List<Message> messages = [
    Message(
      text: 'yes ',
      date: DateTime.now().subtract(const Duration(minutes: 1)),
      inSentByMe: false,
    )
  ];

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      body: Column(
        children: [
          Expanded(
            child: GroupedListView<Message, DateTime>(
                padding: const EdgeInsets.all(8),
                elements: messages,
                groupBy: (message) => DateTime(
                    message.date.year, message.date.month, message.date.day),
                groupHeaderBuilder: (Message message) => const SizedBox(),
                itemBuilder: (context, Message message) => Align(
                      alignment: message.inSentByMe
                          ? Alignment.center
                          : Alignment.centerLeft,
                      child: Card(
                        elevation: 8,
                        child: Padding(
                          padding: const EdgeInsets.all(12),
                          child: Text(message.text),
                        ),
                      ),
                    )),
          ),
          Container(
            color: Colors.grey,
            child:  TextField(
              decoration: const InputDecoration(
                contentPadding: EdgeInsets.all(12),
                hintText: 'Type your messagee',
              ),
              
              onSubmitted: (text) {
                final message =
                    Message(text: text, date: DateTime.now(), inSentByMe: true);

                setState(
                  () => messages.add(message),
                );
              },
            ),
          )
        ],
      ),
    );
  }
}
