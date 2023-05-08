import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_square_button.dart';
import 'package:dental_plaza/features/main/bloc/notifications_cubit.dart';
import 'package:dental_plaza/settings/widget/scope/settings_scope.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class CustomAppBar extends StatefulWidget {
  const CustomAppBar({super.key});

  @override
  State<CustomAppBar> createState() => _CustomAppBarState();
}

class _CustomAppBarState extends State<CustomAppBar> {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: AppColors.kWhite,
      automaticallyImplyLeading: false,
      toolbarHeight: 88,
      titleSpacing: 0,
      elevation: 0,
      title: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Image.asset(
              Assets.images.dentalPlaza.path,
              height: 35,
              fit: BoxFit.cover,
            ),
            SizedBox(
              height: 32,
              width: 35,
              child: Stack(
                children: [
                  Positioned(
                    bottom: 0,
                    left: 0,
                    child: BlocListener<NotificationsCubit, NotificationsState>(
                      listener: (context, state) {
                        state.whenOrNull(
                          loadedState: (notifications, isViewed) {
                            SettingsScope.setisNotificationViewed(
                              context,
                              isViewed,
                            );
                            setState(() {});
                          },
                        );
                      },
                      child: CustomSquareButton(
                        iconPath: Assets.icons.icNotification.path,
                        iconColor: AppColors.kWhite,
                        iconPadding: const EdgeInsets.all(5),
                        size: 30,
                        backgroundColor: AppColors.kBlue,
                        onTap: () {},
                      ),
                    ),
                  ),
                  if (context.isNotificationViewed == false)
                    Positioned(
                      top: 0,
                      right: 0,
                      child: Container(
                        height: 15,
                        width: 15,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(55),
                          color: Colors.red,
                        ),
                      ),
                    )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
