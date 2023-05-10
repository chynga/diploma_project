import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:dental_plaza/features/chat/bloc/chat_cubit.dart';
import 'package:dental_plaza/features/chat/model/message_dto.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:grouped_list/grouped_list.dart';
import 'package:intl/intl.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

class ChatPage extends StatefulWidget {
  final bool? isFromNot;
  const ChatPage({super.key, this.isFromNot});

  @override
  State<ChatPage> createState() => _ChatPageState();

  // @override
  // Widget wrappedRoute(BuildContext context) {
  //   return BlocProvider<ChatCubit>(
  //     create: (context) => ChatCubit(
  //       context.repository.mainRepository,
  //       context.repository.authRepository,
  //     )..getMessages(),
  //     child: this,
  //   );
  // }
}

class _ChatPageState extends State<ChatPage> {
  @override
  void initState() {
    BlocProvider.of<ChatCubit>(context).getMessages();
    BlocProvider.of<ChatCubit>(context).connectWebSocket();
    if (widget.isFromNot == true) {
      BlocProvider.of<ChatCubit>(context).readMessage();
    }
    super.initState();
  }

  TextEditingController controller = TextEditingController();
  RefreshController refreshController = RefreshController();

  // @override
  // void dispose() {
  // BlocProvider.of<ChatCubit>(context).closeWebSocket();
  //   super.dispose();
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.kGreyBg,
      appBar: widget.isFromNot == true
          ? AppBar(
              automaticallyImplyLeading: false,
              backgroundColor: Colors.white,
              flexibleSpace: SafeArea(child: const CustomBackButton()),
            )
          : const PreferredSize(
              preferredSize: Size.fromHeight(88),
              child: CustomAppBar(),
            ),
      body: SmartRefresher(
        enablePullUp: true,
        controller: refreshController,
        onRefresh: () {
          refreshController.refreshCompleted();
        },
        onLoading: () {
          BlocProvider.of<ChatCubit>(context).getMessages();
          BlocProvider.of<ChatCubit>(context).connectWebSocket();
          refreshController.loadComplete();
        },
        child: Column(
          children: [
            Center(
              child: Container(
                decoration: const BoxDecoration(
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(16),
                    bottomRight: Radius.circular(16),
                  ),
                  color: AppColors.kBlue,
                ),
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8, vertical: 7)
                          .copyWith(top: 3),
                  child: Text(
                    'Администратор',
                    style:
                        AppTextStyles.m18w400.copyWith(color: AppColors.kWhite),
                  ),
                ),
              ),
            ),
            BlocConsumer<ChatCubit, ChatState>(
              listener: (context, state) {
                state.maybeWhen(
                  errorState: (message) {
                    buildErrorCustomSnackBar(context, message);
                  },
                  orElse: () {},
                );
              },
              buildWhen: (previous, current) => current.maybeWhen(
                loadingState: () => previous.maybeWhen(
                  initialState: () => true,
                  orElse: () => false,
                ),
                loadedState: (messages) => true,
                orElse: () => false,
              ),
              builder: (context, state) {
                return state.maybeWhen(
                  loadedState: (messages) {
                    return Expanded(
                      child: GroupedListView<MessageDTO, DateTime>(
                        sort: false,
                        reverse: true,
                        padding: const EdgeInsets.symmetric(
                          vertical: 4,
                          horizontal: 5,
                        ),
                        elements: messages,
                        groupHeaderBuilder: (MessageDTO message) {
                          final tag = Localizations.maybeLocaleOf(context)
                              ?.toLanguageTag();
                          return Center(
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(
                                DateFormat("dd MMMM", tag)
                                    .format(message.createdAt!),
                                style: AppTextStyles.m16w500,
                              ),
                            ),
                          );
                        },
                        groupBy: (message) => DateTime(
                          message.createdAt!.year,
                          message.createdAt!.month,
                          message.createdAt!.day,
                        ),
                        separator: const SizedBox(height: 8),
                        itemBuilder: (context, MessageDTO message) {
                          return Align(
                            alignment: message.isClient ?? true
                                ? Alignment.centerRight
                                : Alignment.centerLeft,
                            child: Container(
                              constraints: BoxConstraints(
                                maxWidth:
                                    MediaQuery.of(context).size.width * 0.75,
                              ),
                              decoration: BoxDecoration(
                                gradient: message.isClient ?? false
                                    ? AppGradients.primaryGradient3
                                    : AppGradients.primaryGradient2Opacity20,
                                borderRadius: BorderRadius.circular(18),
                              ),
                              padding: const EdgeInsets.symmetric(
                                vertical: 7,
                                horizontal: 14,
                              ),
                              child: IntrinsicWidth(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.end,
                                  children: [
                                    if (message.body != null)
                                      Row(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.end,
                                        children: [
                                          Expanded(
                                            child: Text(
                                              '${message.body}',
                                              style: message.isClient ?? false
                                                  ? AppTextStyles.m16w500
                                                      .copyWith(
                                                      color: Colors.white,
                                                    )
                                                  : AppTextStyles.m16w500
                                                      .copyWith(
                                                      color: Colors.black,
                                                    ),
                                            ),
                                          ),
                                          const SizedBox(
                                            width: 10,
                                          ),
                                          Text(
                                            DateFormat('HH:mm').format(
                                              (message.createdAt ??
                                                      DateTime.now())
                                                  .add(
                                                const Duration(hours: 6),
                                              ),
                                            ),
                                            style: message.isClient ?? false
                                                ? AppTextStyles.m14w500
                                                    .copyWith(
                                                    color: Colors.white,
                                                  )
                                                : AppTextStyles.m14w500
                                                    .copyWith(
                                                    color: Colors.black,
                                                  ),
                                          )
                                        ],
                                      ),
                                  ],
                                ),
                              ),
                            ),
                          );
                        },
                      ),
                    );
                  },
                  orElse: () {
                    return const Expanded(child: SizedBox());
                  },
                );
              },
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
              child: SizedBox(
                child: Row(
                  children: [
                    Expanded(
                      child: SizedBox(
                        height: 42,
                        child: CustomTextField(
                          controller: controller,
                          borderSideColor: AppColors.kBlack.withOpacity(0.1),
                          borderRadius: 10,
                          maxLines: 1,
                        ),
                      ),
                    ),
                    const SizedBox(
                      width: 13,
                    ),
                    Container(
                      height: 33.3,
                      width: 33.3,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(50),
                        color: AppColors.kBlue,
                      ),
                      child: Material(
                        borderRadius: BorderRadius.circular(50),
                        color: Colors.transparent,
                        child: InkWell(
                          borderRadius: BorderRadius.circular(50),
                          onTap: () {
                            if (controller.text.isNotEmpty) {
                              BlocProvider.of<ChatCubit>(context)
                                  .sendMessage(message: controller.text);
                              controller.clear();
                            }
                          },
                          child: const Icon(
                            Icons.arrow_forward_rounded,
                            color: AppColors.kWhite,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
