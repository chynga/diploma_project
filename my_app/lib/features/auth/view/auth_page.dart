import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/auth/bloc/auth_bloc.dart';
import 'package:dental_plaza/features/auth/widgets/login_block_widget.dart';
import 'package:dental_plaza/features/auth/widgets/registration_block_widget.dart';
import 'package:expandable_page_view/expandable_page_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  State<AuthPage> createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  @override
  Widget build(BuildContext context) {
    return BlocProvider<AuthBloc>(
      create: (context) => AuthBloc(),
      child: const _AuthPage(),
    );
  }
}

class _AuthPage extends StatefulWidget {
  const _AuthPage();

  @override
  State<_AuthPage> createState() => __AuthPageState();
}

class __AuthPageState extends State<_AuthPage> {
  PageController pageController = PageController();
  int _activePage = 0;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: ListView(
          children: [
            const SizedBox(
              height: 150,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 97),
              child: Image.asset(Assets.images.dentalPlaza.path),
            ),
            const SizedBox(
              height: 50,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 100),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  TextButton(
                    onPressed: () {
                      _activePage = 0;
                      pageController.animateToPage(
                        _activePage,
                        duration: const Duration(milliseconds: 300),
                        curve: Curves.linear,
                      );
                    },
                    child: Text(
                      'Регистрация',
                      style: AppTextStyles.m14w400.copyWith(
                        decoration: TextDecoration.underline,
                        decorationThickness: 2,
                        color: Colors.transparent,
                        shadows: [
                          Shadow(
                            offset: const Offset(0, -7),
                            color: _activePage == 0
                                ? AppColors.kBlue
                                : AppColors.kBlack,
                          )
                        ],
                        decorationColor: _activePage == 0
                            ? AppColors.kBlue
                            : Colors.transparent,
                      ),
                    ),
                  ),
                  TextButton(
                    onPressed: () {
                      _activePage = 1;
                      pageController.animateToPage(
                        _activePage,
                        duration: const Duration(milliseconds: 300),
                        curve: Curves.linear,
                      );
                    },
                    child: Text(
                      'Вход',
                      style: AppTextStyles.m14w400.copyWith(
                        decoration: TextDecoration.underline,
                        decorationThickness: 2,
                        color: Colors.transparent,
                        shadows: [
                          Shadow(
                            offset: const Offset(0, -7),
                            color: _activePage == 1
                                ? AppColors.kBlue
                                : AppColors.kBlack,
                          )
                        ],
                        decorationColor: _activePage == 1
                            ? AppColors.kBlue
                            : Colors.transparent,
                      ),
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            ExpandablePageView(
              onPageChanged: (value) {
                _activePage = value;
                setState(() {});
              },
              controller: pageController,
              children: const [RegistrationBlockWidget(), LoginBlockWidget()],
            )
          ],
        ),
      ),
    );
  }
}
