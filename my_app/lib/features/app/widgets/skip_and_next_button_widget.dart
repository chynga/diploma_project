import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:showcaseview/showcaseview.dart';

class SkipAndNextButtonWidget extends StatelessWidget {
  final BuildContext myContext;
  const SkipAndNextButtonWidget({
    super.key,
    required this.myContext,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
        TextButton(
            onPressed: () {
              WidgetsBinding.instance.addPostFrameCallback((_) async {
                ShowCaseWidget.of(myContext).dismiss();
              });
              BlocProvider.of<AppBLoC>(context)
                  .add(const AppEvent.showcaseSave());
            },
            child: Text(
              context.localized.skip,
              style: AppTextStyles.m16w700.copyWith(
                color: const Color(0xffD0E5FF),
              ),
            ),
          ),
          TextButton(
            onPressed: () {
              ShowCaseWidget.of(myContext).next();
            },
            child: Row(
              children: [
                Text(
                  context.localized.next,
                  style: AppTextStyles.m16w700.copyWith(
                    color: const Color(0xffD0E5FF),
                  ),
                ),
                const SizedBox(
                  width: 8,
                ),
                const Icon(
                  Icons.arrow_forward,
                  size: 24,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
