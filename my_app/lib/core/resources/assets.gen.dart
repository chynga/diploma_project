/// GENERATED CODE - DO NOT MODIFY BY HAND
/// *****************************************************
///  FlutterGen
/// *****************************************************

// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: directives_ordering,unnecessary_import,implicit_dynamic_list_literal,deprecated_member_use

import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/services.dart';

class $AssetsIconsGen {
  const $AssetsIconsGen();

  /// File path: assets/icons/chevron-left.svg
  SvgGenImage get chevronLeft =>
      const SvgGenImage('assets/icons/chevron-left.svg');

  /// File path: assets/icons/ic_chat.svg
  SvgGenImage get icChat => const SvgGenImage('assets/icons/ic_chat.svg');

  /// File path: assets/icons/ic_chat_filled.svg
  SvgGenImage get icChatFilled =>
      const SvgGenImage('assets/icons/ic_chat_filled.svg');

  /// File path: assets/icons/ic_main.svg
  SvgGenImage get icMain => const SvgGenImage('assets/icons/ic_main.svg');

  /// File path: assets/icons/ic_main_filled.svg
  SvgGenImage get icMainFilled =>
      const SvgGenImage('assets/icons/ic_main_filled.svg');

  /// File path: assets/icons/ic_notification.svg
  SvgGenImage get icNotification =>
      const SvgGenImage('assets/icons/ic_notification.svg');

  /// File path: assets/icons/ic_onboarding.svg
  SvgGenImage get icOnboarding =>
      const SvgGenImage('assets/icons/ic_onboarding.svg');

  /// File path: assets/icons/ic_profile.svg
  SvgGenImage get icProfile => const SvgGenImage('assets/icons/ic_profile.svg');

  /// File path: assets/icons/ic_profile_filled.svg
  SvgGenImage get icProfileFilled =>
      const SvgGenImage('assets/icons/ic_profile_filled.svg');

  /// File path: assets/icons/ic_record.svg
  SvgGenImage get icRecord => const SvgGenImage('assets/icons/ic_record.svg');

  /// File path: assets/icons/ic_record_filled.svg
  SvgGenImage get icRecordFilled =>
      const SvgGenImage('assets/icons/ic_record_filled.svg');

  /// File path: assets/icons/ic_services.svg
  SvgGenImage get icServices =>
      const SvgGenImage('assets/icons/ic_services.svg');

  /// File path: assets/icons/ic_tooth.svg
  SvgGenImage get icTooth => const SvgGenImage('assets/icons/ic_tooth.svg');

  /// File path: assets/icons/ic_tooth_filled.svg
  SvgGenImage get icToothFilled =>
      const SvgGenImage('assets/icons/ic_tooth_filled.svg');

  /// File path: assets/icons/teeth_dental_icon.svg
  SvgGenImage get teethDentalIcon =>
      const SvgGenImage('assets/icons/teeth_dental_icon.svg');

  /// File path: assets/icons/teeth_dental_icon_big.svg
  SvgGenImage get teethDentalIconBig =>
      const SvgGenImage('assets/icons/teeth_dental_icon_big.svg');

  /// List of all assets
  List<SvgGenImage> get values => [
        chevronLeft,
        icChat,
        icChatFilled,
        icMain,
        icMainFilled,
        icNotification,
        icOnboarding,
        icProfile,
        icProfileFilled,
        icRecord,
        icRecordFilled,
        icServices,
        icTooth,
        icToothFilled,
        teethDentalIcon,
        teethDentalIconBig
      ];
}

class $AssetsImagesGen {
  const $AssetsImagesGen();

  /// File path: assets/images/dentalPlaza.png
  AssetGenImage get dentalPlaza =>
      const AssetGenImage('assets/images/dentalPlaza.png');

  /// File path: assets/images/mainPicture.png
  AssetGenImage get mainPicture =>
      const AssetGenImage('assets/images/mainPicture.png');

  /// List of all assets
  List<AssetGenImage> get values => [dentalPlaza, mainPicture];
}

class Assets {
  Assets._();

  static const $AssetsIconsGen icons = $AssetsIconsGen();
  static const $AssetsImagesGen images = $AssetsImagesGen();
}

class AssetGenImage {
  const AssetGenImage(this._assetName);

  final String _assetName;

  Image image({
    Key? key,
    AssetBundle? bundle,
    ImageFrameBuilder? frameBuilder,
    ImageErrorWidgetBuilder? errorBuilder,
    String? semanticLabel,
    bool excludeFromSemantics = false,
    double? scale,
    double? width,
    double? height,
    Color? color,
    Animation<double>? opacity,
    BlendMode? colorBlendMode,
    BoxFit? fit,
    AlignmentGeometry alignment = Alignment.center,
    ImageRepeat repeat = ImageRepeat.noRepeat,
    Rect? centerSlice,
    bool matchTextDirection = false,
    bool gaplessPlayback = false,
    bool isAntiAlias = false,
    String? package,
    FilterQuality filterQuality = FilterQuality.low,
    int? cacheWidth,
    int? cacheHeight,
  }) {
    return Image.asset(
      _assetName,
      key: key,
      bundle: bundle,
      frameBuilder: frameBuilder,
      errorBuilder: errorBuilder,
      semanticLabel: semanticLabel,
      excludeFromSemantics: excludeFromSemantics,
      scale: scale,
      width: width,
      height: height,
      color: color,
      opacity: opacity,
      colorBlendMode: colorBlendMode,
      fit: fit,
      alignment: alignment,
      repeat: repeat,
      centerSlice: centerSlice,
      matchTextDirection: matchTextDirection,
      gaplessPlayback: gaplessPlayback,
      isAntiAlias: isAntiAlias,
      package: package,
      filterQuality: filterQuality,
      cacheWidth: cacheWidth,
      cacheHeight: cacheHeight,
    );
  }

  ImageProvider provider() => AssetImage(_assetName);

  String get path => _assetName;

  String get keyName => _assetName;
}

class SvgGenImage {
  const SvgGenImage(this._assetName);

  final String _assetName;

  SvgPicture svg({
    Key? key,
    bool matchTextDirection = false,
    AssetBundle? bundle,
    String? package,
    double? width,
    double? height,
    BoxFit fit = BoxFit.contain,
    AlignmentGeometry alignment = Alignment.center,
    bool allowDrawingOutsideViewBox = false,
    WidgetBuilder? placeholderBuilder,
    String? semanticsLabel,
    bool excludeFromSemantics = false,
    SvgTheme theme = const SvgTheme(),
    ColorFilter? colorFilter,
    @deprecated Color? color,
    @deprecated BlendMode colorBlendMode = BlendMode.srcIn,
    @deprecated Clip? clipBehavior,
    @deprecated bool cacheColorFilter = false,
  }) {
    return SvgPicture.asset(
      _assetName,
      key: key,
      matchTextDirection: matchTextDirection,
      bundle: bundle,
      package: package,
      width: width,
      height: height,
      fit: fit,
      alignment: alignment,
      allowDrawingOutsideViewBox: allowDrawingOutsideViewBox,
      placeholderBuilder: placeholderBuilder,
      semanticsLabel: semanticsLabel,
      excludeFromSemantics: excludeFromSemantics,
      theme: theme,
      colorFilter: colorFilter,
      color: color,
      colorBlendMode: colorBlendMode,
      clipBehavior: clipBehavior,
      cacheColorFilter: cacheColorFilter,
    );
  }

  String get path => _assetName;

  String get keyName => _assetName;
}
