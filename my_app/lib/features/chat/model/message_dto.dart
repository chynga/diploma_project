// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';

part 'message_dto.freezed.dart';
part 'message_dto.g.dart';

@freezed
class MessageDTO with _$MessageDTO {
  const factory MessageDTO({
    String? id,
    String? chatId,
    String? writerId,
    String? body,
    bool? isClient,
    DateTime? createdAt
  }) = _MessageDTO;

  factory MessageDTO.fromJson(Map<String, dynamic> json) => _$MessageDTOFromJson(json);

  // @override
  // UserDTO fromJson(Map<String, dynamic> json) => UserDTO.fromJson(json);
}
