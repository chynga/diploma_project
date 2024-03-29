import 'dart:developer';

import 'package:bloc/bloc.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'app_bloc.freezed.dart';

const _tag = 'AppBLoC';

class AppBLoC extends Bloc<AppEvent, AppState> {
  final IAuthRepository _authRepository;

  // Статус аутентификации
  bool get isAuthenticated => _authRepository.isAuthenticated;

  AppBLoC(
    this._authRepository,
  ) : super(const AppState.loadingState()) {
    on<AppEvent>(
      (AppEvent event, Emitter<AppState> emit) async => event.map(
        exiting: (_Exiting event) async => _exit(event, emit),
        checkAuth: (_CheckAuth event) async => _checkAuth(event, emit),
        logining: (_Logining event) async => _login(event, emit),
        refreshLocal: (_RefreshLocal event) async => _refreshLocal(event, emit),
        startListenDio: (_StartListenDio event) async =>
            _startListenDio(event, emit),
        sendDeviceToken: (_SendDeviceToken event) async =>
            _sendDeviceToken(event, emit),
        onboardingSave: (_OnboardingSave event) async =>
            _onboardingSave(event, emit),
        showcaseSave: (_ShowcaseSave event)async => _showcaseSave(event,emit),
      ),
    );
  }

  Future<void> _checkAuth(
    _CheckAuth event,
    Emitter<AppState> emit,
  ) async {
    final bool onboarding = _authRepository.getOnboarding();
    final bool showcase = _authRepository.getShowcase();
    final deviceToken = _authRepository.getDeviceToken();

    log(deviceToken.toString(),name: 'DEVICE_TOKEN');
    if (onboarding) {
      if (_authRepository.isAuthenticated) {
        emit(AppState.inAppState(showcase: showcase));
      } else {
        emit(const AppState.notAuthorizedState());
      }
    } else {
      emit(const AppState.onboardingState());
    }
  }

  Future<void> _onboardingSave(
    _OnboardingSave event,
    Emitter<AppState> emit,
  ) async {
    _authRepository.setOnboarding(onboarding: true);
    emit(const AppState.notAuthorizedState());
  }

  
  Future<void> _showcaseSave(
    _ShowcaseSave event,
    Emitter<AppState> emit,
  ) async {
    _authRepository.setShowcase(showcase: true);
  }

  Future<void> _login(
    _Logining event,
    Emitter<AppState> emit,
  ) async {
    log('AppBloc _login', name: _tag);

    final bool showcase = _authRepository.getShowcase();
    emit(AppState.inAppState(showcase: showcase));
  }

  Future<void> _exit(
    _Exiting event,
    Emitter<AppState> emit,
  ) async {
    emit(const AppState.notAuthorizedState());
    await _authRepository.clearUser();
  }

  Future<void> _refreshLocal(
    _RefreshLocal event,
    Emitter<AppState> emit,
  ) async {
    await state.maybeWhen(
      inAppState: (showcase) async {
        emit(const AppState.loadingState());
        await Future.delayed(const Duration(milliseconds: 100));
        emit(AppState.inAppState(showcase: showcase));
      },
      orElse: () async {
        emit(const AppState.loadingState());
        await Future.delayed(const Duration(milliseconds: 100));
        emit(const AppState.notAuthorizedState());
      },
    );
  }

  Future<void> _startListenDio(
    _StartListenDio event,
    Emitter<AppState> emit,
  ) async {
    emit(const AppState.notAuthorizedState());
  }

  Future<void> _sendDeviceToken(
    _SendDeviceToken event,
    Emitter<AppState> emit,
  ) async {
    // final result = await _authRepository.sendDeviceToken();

    // result.fold(
    //   (l) {
    //     log('_sendDeviceToken left: ${mapFailureToMessage(l)}', name: _tag);
    //   },
    //   (r) {
    //     log('_sendDeviceToken righy: $r', name: _tag);
    //   },
    // );
  }

  // @override
  // void onTransition(Transition<AppEvent, AppState> transition) {
  //   print(transition);
  //   super.onTransition(transition);
  // }

  // @override
  // void onChange(Change<AppState> change) {
  //   print(change);
  //   super.onChange(change);
  // }
}

///
///
/// Event class
///
///
@freezed
class AppEvent with _$AppEvent {
  const factory AppEvent.checkAuth() = _CheckAuth;

  const factory AppEvent.logining() = _Logining;

  const factory AppEvent.exiting() = _Exiting;

  const factory AppEvent.refreshLocal() = _RefreshLocal;

  const factory AppEvent.startListenDio() = _StartListenDio;

  const factory AppEvent.sendDeviceToken() = _SendDeviceToken;

  const factory AppEvent.onboardingSave() = _OnboardingSave;

  const factory AppEvent.showcaseSave() = _ShowcaseSave;
}

///
///
/// State class
///
///
@freezed
class AppState with _$AppState {
  const factory AppState.loadingState() = _LoadingState;

  const factory AppState.notAuthorizedState() = _NotAuthorizedState;

  const factory AppState.onboardingState() = _OnboardingState;

  const factory AppState.inAppState({
    bool? showcase,
  }) = _InAppState;

  const factory AppState.errorState({
    required String message,
  }) = _ErrorState;
}
