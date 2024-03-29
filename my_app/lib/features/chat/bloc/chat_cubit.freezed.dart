// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'chat_cubit.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$ChatState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initialState,
    required TResult Function(List<MessageDTO> messages) loadedState,
    required TResult Function(List<MessageDTO> messages) newMessageState,
    required TResult Function(List<MessageDTO> messages) readMessageState,
    required TResult Function() loadingState,
    required TResult Function(String message) errorState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initialState,
    TResult? Function(List<MessageDTO> messages)? loadedState,
    TResult? Function(List<MessageDTO> messages)? newMessageState,
    TResult? Function(List<MessageDTO> messages)? readMessageState,
    TResult? Function()? loadingState,
    TResult? Function(String message)? errorState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initialState,
    TResult Function(List<MessageDTO> messages)? loadedState,
    TResult Function(List<MessageDTO> messages)? newMessageState,
    TResult Function(List<MessageDTO> messages)? readMessageState,
    TResult Function()? loadingState,
    TResult Function(String message)? errorState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_InitialState value) initialState,
    required TResult Function(_LoadedState value) loadedState,
    required TResult Function(_NewMessageState value) newMessageState,
    required TResult Function(_ReadMessageState value) readMessageState,
    required TResult Function(_LoadingState value) loadingState,
    required TResult Function(_ErrorState value) errorState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_InitialState value)? initialState,
    TResult? Function(_LoadedState value)? loadedState,
    TResult? Function(_NewMessageState value)? newMessageState,
    TResult? Function(_ReadMessageState value)? readMessageState,
    TResult? Function(_LoadingState value)? loadingState,
    TResult? Function(_ErrorState value)? errorState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_InitialState value)? initialState,
    TResult Function(_LoadedState value)? loadedState,
    TResult Function(_NewMessageState value)? newMessageState,
    TResult Function(_ReadMessageState value)? readMessageState,
    TResult Function(_LoadingState value)? loadingState,
    TResult Function(_ErrorState value)? errorState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ChatStateCopyWith<$Res> {
  factory $ChatStateCopyWith(ChatState value, $Res Function(ChatState) then) =
      _$ChatStateCopyWithImpl<$Res, ChatState>;
}

/// @nodoc
class _$ChatStateCopyWithImpl<$Res, $Val extends ChatState>
    implements $ChatStateCopyWith<$Res> {
  _$ChatStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_InitialStateCopyWith<$Res> {
  factory _$$_InitialStateCopyWith(
          _$_InitialState value, $Res Function(_$_InitialState) then) =
      __$$_InitialStateCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_InitialStateCopyWithImpl<$Res>
    extends _$ChatStateCopyWithImpl<$Res, _$_InitialState>
    implements _$$_InitialStateCopyWith<$Res> {
  __$$_InitialStateCopyWithImpl(
      _$_InitialState _value, $Res Function(_$_InitialState) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_InitialState implements _InitialState {
  const _$_InitialState();

  @override
  String toString() {
    return 'ChatState.initialState()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_InitialState);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initialState,
    required TResult Function(List<MessageDTO> messages) loadedState,
    required TResult Function(List<MessageDTO> messages) newMessageState,
    required TResult Function(List<MessageDTO> messages) readMessageState,
    required TResult Function() loadingState,
    required TResult Function(String message) errorState,
  }) {
    return initialState();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initialState,
    TResult? Function(List<MessageDTO> messages)? loadedState,
    TResult? Function(List<MessageDTO> messages)? newMessageState,
    TResult? Function(List<MessageDTO> messages)? readMessageState,
    TResult? Function()? loadingState,
    TResult? Function(String message)? errorState,
  }) {
    return initialState?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initialState,
    TResult Function(List<MessageDTO> messages)? loadedState,
    TResult Function(List<MessageDTO> messages)? newMessageState,
    TResult Function(List<MessageDTO> messages)? readMessageState,
    TResult Function()? loadingState,
    TResult Function(String message)? errorState,
    required TResult orElse(),
  }) {
    if (initialState != null) {
      return initialState();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_InitialState value) initialState,
    required TResult Function(_LoadedState value) loadedState,
    required TResult Function(_NewMessageState value) newMessageState,
    required TResult Function(_ReadMessageState value) readMessageState,
    required TResult Function(_LoadingState value) loadingState,
    required TResult Function(_ErrorState value) errorState,
  }) {
    return initialState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_InitialState value)? initialState,
    TResult? Function(_LoadedState value)? loadedState,
    TResult? Function(_NewMessageState value)? newMessageState,
    TResult? Function(_ReadMessageState value)? readMessageState,
    TResult? Function(_LoadingState value)? loadingState,
    TResult? Function(_ErrorState value)? errorState,
  }) {
    return initialState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_InitialState value)? initialState,
    TResult Function(_LoadedState value)? loadedState,
    TResult Function(_NewMessageState value)? newMessageState,
    TResult Function(_ReadMessageState value)? readMessageState,
    TResult Function(_LoadingState value)? loadingState,
    TResult Function(_ErrorState value)? errorState,
    required TResult orElse(),
  }) {
    if (initialState != null) {
      return initialState(this);
    }
    return orElse();
  }
}

abstract class _InitialState implements ChatState {
  const factory _InitialState() = _$_InitialState;
}

/// @nodoc
abstract class _$$_LoadedStateCopyWith<$Res> {
  factory _$$_LoadedStateCopyWith(
          _$_LoadedState value, $Res Function(_$_LoadedState) then) =
      __$$_LoadedStateCopyWithImpl<$Res>;
  @useResult
  $Res call({List<MessageDTO> messages});
}

/// @nodoc
class __$$_LoadedStateCopyWithImpl<$Res>
    extends _$ChatStateCopyWithImpl<$Res, _$_LoadedState>
    implements _$$_LoadedStateCopyWith<$Res> {
  __$$_LoadedStateCopyWithImpl(
      _$_LoadedState _value, $Res Function(_$_LoadedState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? messages = null,
  }) {
    return _then(_$_LoadedState(
      messages: null == messages
          ? _value._messages
          : messages // ignore: cast_nullable_to_non_nullable
              as List<MessageDTO>,
    ));
  }
}

/// @nodoc

class _$_LoadedState implements _LoadedState {
  const _$_LoadedState({required final List<MessageDTO> messages})
      : _messages = messages;

  final List<MessageDTO> _messages;
  @override
  List<MessageDTO> get messages {
    if (_messages is EqualUnmodifiableListView) return _messages;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_messages);
  }

  @override
  String toString() {
    return 'ChatState.loadedState(messages: $messages)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_LoadedState &&
            const DeepCollectionEquality().equals(other._messages, _messages));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_messages));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_LoadedStateCopyWith<_$_LoadedState> get copyWith =>
      __$$_LoadedStateCopyWithImpl<_$_LoadedState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initialState,
    required TResult Function(List<MessageDTO> messages) loadedState,
    required TResult Function(List<MessageDTO> messages) newMessageState,
    required TResult Function(List<MessageDTO> messages) readMessageState,
    required TResult Function() loadingState,
    required TResult Function(String message) errorState,
  }) {
    return loadedState(messages);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initialState,
    TResult? Function(List<MessageDTO> messages)? loadedState,
    TResult? Function(List<MessageDTO> messages)? newMessageState,
    TResult? Function(List<MessageDTO> messages)? readMessageState,
    TResult? Function()? loadingState,
    TResult? Function(String message)? errorState,
  }) {
    return loadedState?.call(messages);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initialState,
    TResult Function(List<MessageDTO> messages)? loadedState,
    TResult Function(List<MessageDTO> messages)? newMessageState,
    TResult Function(List<MessageDTO> messages)? readMessageState,
    TResult Function()? loadingState,
    TResult Function(String message)? errorState,
    required TResult orElse(),
  }) {
    if (loadedState != null) {
      return loadedState(messages);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_InitialState value) initialState,
    required TResult Function(_LoadedState value) loadedState,
    required TResult Function(_NewMessageState value) newMessageState,
    required TResult Function(_ReadMessageState value) readMessageState,
    required TResult Function(_LoadingState value) loadingState,
    required TResult Function(_ErrorState value) errorState,
  }) {
    return loadedState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_InitialState value)? initialState,
    TResult? Function(_LoadedState value)? loadedState,
    TResult? Function(_NewMessageState value)? newMessageState,
    TResult? Function(_ReadMessageState value)? readMessageState,
    TResult? Function(_LoadingState value)? loadingState,
    TResult? Function(_ErrorState value)? errorState,
  }) {
    return loadedState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_InitialState value)? initialState,
    TResult Function(_LoadedState value)? loadedState,
    TResult Function(_NewMessageState value)? newMessageState,
    TResult Function(_ReadMessageState value)? readMessageState,
    TResult Function(_LoadingState value)? loadingState,
    TResult Function(_ErrorState value)? errorState,
    required TResult orElse(),
  }) {
    if (loadedState != null) {
      return loadedState(this);
    }
    return orElse();
  }
}

abstract class _LoadedState implements ChatState {
  const factory _LoadedState({required final List<MessageDTO> messages}) =
      _$_LoadedState;

  List<MessageDTO> get messages;
  @JsonKey(ignore: true)
  _$$_LoadedStateCopyWith<_$_LoadedState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_NewMessageStateCopyWith<$Res> {
  factory _$$_NewMessageStateCopyWith(
          _$_NewMessageState value, $Res Function(_$_NewMessageState) then) =
      __$$_NewMessageStateCopyWithImpl<$Res>;
  @useResult
  $Res call({List<MessageDTO> messages});
}

/// @nodoc
class __$$_NewMessageStateCopyWithImpl<$Res>
    extends _$ChatStateCopyWithImpl<$Res, _$_NewMessageState>
    implements _$$_NewMessageStateCopyWith<$Res> {
  __$$_NewMessageStateCopyWithImpl(
      _$_NewMessageState _value, $Res Function(_$_NewMessageState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? messages = null,
  }) {
    return _then(_$_NewMessageState(
      messages: null == messages
          ? _value._messages
          : messages // ignore: cast_nullable_to_non_nullable
              as List<MessageDTO>,
    ));
  }
}

/// @nodoc

class _$_NewMessageState implements _NewMessageState {
  const _$_NewMessageState({required final List<MessageDTO> messages})
      : _messages = messages;

  final List<MessageDTO> _messages;
  @override
  List<MessageDTO> get messages {
    if (_messages is EqualUnmodifiableListView) return _messages;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_messages);
  }

  @override
  String toString() {
    return 'ChatState.newMessageState(messages: $messages)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_NewMessageState &&
            const DeepCollectionEquality().equals(other._messages, _messages));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_messages));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_NewMessageStateCopyWith<_$_NewMessageState> get copyWith =>
      __$$_NewMessageStateCopyWithImpl<_$_NewMessageState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initialState,
    required TResult Function(List<MessageDTO> messages) loadedState,
    required TResult Function(List<MessageDTO> messages) newMessageState,
    required TResult Function(List<MessageDTO> messages) readMessageState,
    required TResult Function() loadingState,
    required TResult Function(String message) errorState,
  }) {
    return newMessageState(messages);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initialState,
    TResult? Function(List<MessageDTO> messages)? loadedState,
    TResult? Function(List<MessageDTO> messages)? newMessageState,
    TResult? Function(List<MessageDTO> messages)? readMessageState,
    TResult? Function()? loadingState,
    TResult? Function(String message)? errorState,
  }) {
    return newMessageState?.call(messages);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initialState,
    TResult Function(List<MessageDTO> messages)? loadedState,
    TResult Function(List<MessageDTO> messages)? newMessageState,
    TResult Function(List<MessageDTO> messages)? readMessageState,
    TResult Function()? loadingState,
    TResult Function(String message)? errorState,
    required TResult orElse(),
  }) {
    if (newMessageState != null) {
      return newMessageState(messages);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_InitialState value) initialState,
    required TResult Function(_LoadedState value) loadedState,
    required TResult Function(_NewMessageState value) newMessageState,
    required TResult Function(_ReadMessageState value) readMessageState,
    required TResult Function(_LoadingState value) loadingState,
    required TResult Function(_ErrorState value) errorState,
  }) {
    return newMessageState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_InitialState value)? initialState,
    TResult? Function(_LoadedState value)? loadedState,
    TResult? Function(_NewMessageState value)? newMessageState,
    TResult? Function(_ReadMessageState value)? readMessageState,
    TResult? Function(_LoadingState value)? loadingState,
    TResult? Function(_ErrorState value)? errorState,
  }) {
    return newMessageState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_InitialState value)? initialState,
    TResult Function(_LoadedState value)? loadedState,
    TResult Function(_NewMessageState value)? newMessageState,
    TResult Function(_ReadMessageState value)? readMessageState,
    TResult Function(_LoadingState value)? loadingState,
    TResult Function(_ErrorState value)? errorState,
    required TResult orElse(),
  }) {
    if (newMessageState != null) {
      return newMessageState(this);
    }
    return orElse();
  }
}

abstract class _NewMessageState implements ChatState {
  const factory _NewMessageState({required final List<MessageDTO> messages}) =
      _$_NewMessageState;

  List<MessageDTO> get messages;
  @JsonKey(ignore: true)
  _$$_NewMessageStateCopyWith<_$_NewMessageState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_ReadMessageStateCopyWith<$Res> {
  factory _$$_ReadMessageStateCopyWith(
          _$_ReadMessageState value, $Res Function(_$_ReadMessageState) then) =
      __$$_ReadMessageStateCopyWithImpl<$Res>;
  @useResult
  $Res call({List<MessageDTO> messages});
}

/// @nodoc
class __$$_ReadMessageStateCopyWithImpl<$Res>
    extends _$ChatStateCopyWithImpl<$Res, _$_ReadMessageState>
    implements _$$_ReadMessageStateCopyWith<$Res> {
  __$$_ReadMessageStateCopyWithImpl(
      _$_ReadMessageState _value, $Res Function(_$_ReadMessageState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? messages = null,
  }) {
    return _then(_$_ReadMessageState(
      messages: null == messages
          ? _value._messages
          : messages // ignore: cast_nullable_to_non_nullable
              as List<MessageDTO>,
    ));
  }
}

/// @nodoc

class _$_ReadMessageState implements _ReadMessageState {
  const _$_ReadMessageState({required final List<MessageDTO> messages})
      : _messages = messages;

  final List<MessageDTO> _messages;
  @override
  List<MessageDTO> get messages {
    if (_messages is EqualUnmodifiableListView) return _messages;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_messages);
  }

  @override
  String toString() {
    return 'ChatState.readMessageState(messages: $messages)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_ReadMessageState &&
            const DeepCollectionEquality().equals(other._messages, _messages));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_messages));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ReadMessageStateCopyWith<_$_ReadMessageState> get copyWith =>
      __$$_ReadMessageStateCopyWithImpl<_$_ReadMessageState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initialState,
    required TResult Function(List<MessageDTO> messages) loadedState,
    required TResult Function(List<MessageDTO> messages) newMessageState,
    required TResult Function(List<MessageDTO> messages) readMessageState,
    required TResult Function() loadingState,
    required TResult Function(String message) errorState,
  }) {
    return readMessageState(messages);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initialState,
    TResult? Function(List<MessageDTO> messages)? loadedState,
    TResult? Function(List<MessageDTO> messages)? newMessageState,
    TResult? Function(List<MessageDTO> messages)? readMessageState,
    TResult? Function()? loadingState,
    TResult? Function(String message)? errorState,
  }) {
    return readMessageState?.call(messages);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initialState,
    TResult Function(List<MessageDTO> messages)? loadedState,
    TResult Function(List<MessageDTO> messages)? newMessageState,
    TResult Function(List<MessageDTO> messages)? readMessageState,
    TResult Function()? loadingState,
    TResult Function(String message)? errorState,
    required TResult orElse(),
  }) {
    if (readMessageState != null) {
      return readMessageState(messages);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_InitialState value) initialState,
    required TResult Function(_LoadedState value) loadedState,
    required TResult Function(_NewMessageState value) newMessageState,
    required TResult Function(_ReadMessageState value) readMessageState,
    required TResult Function(_LoadingState value) loadingState,
    required TResult Function(_ErrorState value) errorState,
  }) {
    return readMessageState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_InitialState value)? initialState,
    TResult? Function(_LoadedState value)? loadedState,
    TResult? Function(_NewMessageState value)? newMessageState,
    TResult? Function(_ReadMessageState value)? readMessageState,
    TResult? Function(_LoadingState value)? loadingState,
    TResult? Function(_ErrorState value)? errorState,
  }) {
    return readMessageState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_InitialState value)? initialState,
    TResult Function(_LoadedState value)? loadedState,
    TResult Function(_NewMessageState value)? newMessageState,
    TResult Function(_ReadMessageState value)? readMessageState,
    TResult Function(_LoadingState value)? loadingState,
    TResult Function(_ErrorState value)? errorState,
    required TResult orElse(),
  }) {
    if (readMessageState != null) {
      return readMessageState(this);
    }
    return orElse();
  }
}

abstract class _ReadMessageState implements ChatState {
  const factory _ReadMessageState({required final List<MessageDTO> messages}) =
      _$_ReadMessageState;

  List<MessageDTO> get messages;
  @JsonKey(ignore: true)
  _$$_ReadMessageStateCopyWith<_$_ReadMessageState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_LoadingStateCopyWith<$Res> {
  factory _$$_LoadingStateCopyWith(
          _$_LoadingState value, $Res Function(_$_LoadingState) then) =
      __$$_LoadingStateCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_LoadingStateCopyWithImpl<$Res>
    extends _$ChatStateCopyWithImpl<$Res, _$_LoadingState>
    implements _$$_LoadingStateCopyWith<$Res> {
  __$$_LoadingStateCopyWithImpl(
      _$_LoadingState _value, $Res Function(_$_LoadingState) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_LoadingState implements _LoadingState {
  const _$_LoadingState();

  @override
  String toString() {
    return 'ChatState.loadingState()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_LoadingState);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initialState,
    required TResult Function(List<MessageDTO> messages) loadedState,
    required TResult Function(List<MessageDTO> messages) newMessageState,
    required TResult Function(List<MessageDTO> messages) readMessageState,
    required TResult Function() loadingState,
    required TResult Function(String message) errorState,
  }) {
    return loadingState();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initialState,
    TResult? Function(List<MessageDTO> messages)? loadedState,
    TResult? Function(List<MessageDTO> messages)? newMessageState,
    TResult? Function(List<MessageDTO> messages)? readMessageState,
    TResult? Function()? loadingState,
    TResult? Function(String message)? errorState,
  }) {
    return loadingState?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initialState,
    TResult Function(List<MessageDTO> messages)? loadedState,
    TResult Function(List<MessageDTO> messages)? newMessageState,
    TResult Function(List<MessageDTO> messages)? readMessageState,
    TResult Function()? loadingState,
    TResult Function(String message)? errorState,
    required TResult orElse(),
  }) {
    if (loadingState != null) {
      return loadingState();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_InitialState value) initialState,
    required TResult Function(_LoadedState value) loadedState,
    required TResult Function(_NewMessageState value) newMessageState,
    required TResult Function(_ReadMessageState value) readMessageState,
    required TResult Function(_LoadingState value) loadingState,
    required TResult Function(_ErrorState value) errorState,
  }) {
    return loadingState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_InitialState value)? initialState,
    TResult? Function(_LoadedState value)? loadedState,
    TResult? Function(_NewMessageState value)? newMessageState,
    TResult? Function(_ReadMessageState value)? readMessageState,
    TResult? Function(_LoadingState value)? loadingState,
    TResult? Function(_ErrorState value)? errorState,
  }) {
    return loadingState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_InitialState value)? initialState,
    TResult Function(_LoadedState value)? loadedState,
    TResult Function(_NewMessageState value)? newMessageState,
    TResult Function(_ReadMessageState value)? readMessageState,
    TResult Function(_LoadingState value)? loadingState,
    TResult Function(_ErrorState value)? errorState,
    required TResult orElse(),
  }) {
    if (loadingState != null) {
      return loadingState(this);
    }
    return orElse();
  }
}

abstract class _LoadingState implements ChatState {
  const factory _LoadingState() = _$_LoadingState;
}

/// @nodoc
abstract class _$$_ErrorStateCopyWith<$Res> {
  factory _$$_ErrorStateCopyWith(
          _$_ErrorState value, $Res Function(_$_ErrorState) then) =
      __$$_ErrorStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_ErrorStateCopyWithImpl<$Res>
    extends _$ChatStateCopyWithImpl<$Res, _$_ErrorState>
    implements _$$_ErrorStateCopyWith<$Res> {
  __$$_ErrorStateCopyWithImpl(
      _$_ErrorState _value, $Res Function(_$_ErrorState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_ErrorState(
      message: null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_ErrorState implements _ErrorState {
  const _$_ErrorState({required this.message});

  @override
  final String message;

  @override
  String toString() {
    return 'ChatState.errorState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_ErrorState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ErrorStateCopyWith<_$_ErrorState> get copyWith =>
      __$$_ErrorStateCopyWithImpl<_$_ErrorState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initialState,
    required TResult Function(List<MessageDTO> messages) loadedState,
    required TResult Function(List<MessageDTO> messages) newMessageState,
    required TResult Function(List<MessageDTO> messages) readMessageState,
    required TResult Function() loadingState,
    required TResult Function(String message) errorState,
  }) {
    return errorState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initialState,
    TResult? Function(List<MessageDTO> messages)? loadedState,
    TResult? Function(List<MessageDTO> messages)? newMessageState,
    TResult? Function(List<MessageDTO> messages)? readMessageState,
    TResult? Function()? loadingState,
    TResult? Function(String message)? errorState,
  }) {
    return errorState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initialState,
    TResult Function(List<MessageDTO> messages)? loadedState,
    TResult Function(List<MessageDTO> messages)? newMessageState,
    TResult Function(List<MessageDTO> messages)? readMessageState,
    TResult Function()? loadingState,
    TResult Function(String message)? errorState,
    required TResult orElse(),
  }) {
    if (errorState != null) {
      return errorState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_InitialState value) initialState,
    required TResult Function(_LoadedState value) loadedState,
    required TResult Function(_NewMessageState value) newMessageState,
    required TResult Function(_ReadMessageState value) readMessageState,
    required TResult Function(_LoadingState value) loadingState,
    required TResult Function(_ErrorState value) errorState,
  }) {
    return errorState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_InitialState value)? initialState,
    TResult? Function(_LoadedState value)? loadedState,
    TResult? Function(_NewMessageState value)? newMessageState,
    TResult? Function(_ReadMessageState value)? readMessageState,
    TResult? Function(_LoadingState value)? loadingState,
    TResult? Function(_ErrorState value)? errorState,
  }) {
    return errorState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_InitialState value)? initialState,
    TResult Function(_LoadedState value)? loadedState,
    TResult Function(_NewMessageState value)? newMessageState,
    TResult Function(_ReadMessageState value)? readMessageState,
    TResult Function(_LoadingState value)? loadingState,
    TResult Function(_ErrorState value)? errorState,
    required TResult orElse(),
  }) {
    if (errorState != null) {
      return errorState(this);
    }
    return orElse();
  }
}

abstract class _ErrorState implements ChatState {
  const factory _ErrorState({required final String message}) = _$_ErrorState;

  String get message;
  @JsonKey(ignore: true)
  _$$_ErrorStateCopyWith<_$_ErrorState> get copyWith =>
      throw _privateConstructorUsedError;
}
