import 'package:dental_plaza/core/model/dependencies_storage.dart';
import 'package:dental_plaza/core/widget/scope.dart';
import 'package:flutter/material.dart';

class DependenciesScope extends Scope {

  const DependenciesScope({
    required this.create,
    required super.child,
    super.key,
  });
  static const DelegateAccess<_DependenciesScopeDelegate> _delegateOf =
      Scope.delegateOf<DependenciesScope, _DependenciesScopeDelegate>;

  final IDependenciesStorage Function(BuildContext context) create;

  static IDependenciesStorage of(
    BuildContext context,
  ) =>
      _delegateOf(context).storage;

  @override
  ScopeDelegate<DependenciesScope> createDelegate() => _DependenciesScopeDelegate();
}

class _DependenciesScopeDelegate extends ScopeDelegate<DependenciesScope> {
  late final IDependenciesStorage storage = widget.create(context);

  @override
  void dispose() {
    storage.close();
    super.dispose();
  }
}
