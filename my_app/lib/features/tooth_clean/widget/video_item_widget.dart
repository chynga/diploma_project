import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';
import 'package:video_player/video_player.dart';

class VideoItemWidget extends StatefulWidget {
  final String videoUrl;
  const VideoItemWidget({super.key, required this.videoUrl});

  @override
  State<VideoItemWidget> createState() => _VideoItemWidgetState();
}

class _VideoItemWidgetState extends State<VideoItemWidget> {
  late VideoPlayerController _controller;
  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.network(
      widget.videoUrl,
      videoPlayerOptions: VideoPlayerOptions(
        mixWithOthers: true,
      ),
    )
      ..addListener(() {
        setState(() {});
      })
      ..setLooping(true)
      ..initialize().then((value) => _controller.play());
    _controller.setVolume(0);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return _controller.value.isInitialized
        ? AspectRatio(
            aspectRatio: _controller.value.aspectRatio,
            child: VideoPlayer(_controller),
          )
        : Shimmer.fromColors(
            baseColor: Colors.grey.shade300,
            highlightColor: Colors.grey.shade100,
            child: Container(
              height: double.infinity,
              width: double.infinity,
              color: Colors.white,
            ),
          );
  }
}
