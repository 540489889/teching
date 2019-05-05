<template>
  <div class="videoWrapper">
    <div class="videoList1">
      <ul>
        <li v-for="item in list" :key="item.id">
          <router-link tag="div" v-if="videoD" :to="'./videoDetails?id='+item.id" class="tpVideo flex-box">
            <div class="leftImg">
              <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
            </div>
            <div class="textInfo box-1">
              <h4 class="media_title">{{item.title}}</h4>
              <p>{{item.update}} <span>{{item.seenum}}观看</span></p>
            </div>
          </router-link>
          <div class="videoImg">
            <!--<img src="../../../assets/img/video-b-2.png" alt="">-->
            <!--<video preload :src="'http://cqeic.swkj2014.com/'+item.video" controls="controls">-->
            <!--<source :src="'http://cqeic.swkj2014.com/'+item.video" type="video/ogg">-->
            <!--<source :src="'http://cqeic.swkj2014.com/'+item.video" type="video/mp4">-->
            <!--Your browser does not support the video tag.-->
            <!--</video>-->
            <div class="js-video">
              <video class="js-media" :poster="'http://cqeic.swkj2014.com/'+item.cover_img">
                <source :src="'http://cqeic.swkj2014.com/'+item.video" />
                <p>你的浏览器不支持 HTML5 Video。</p>
              </video>
              <i data-playPause class="playPause fa fa-play ui-icon"><span></span></i>
              <div class="ui">
                <div>
                  <div data-progress class="progress">
                    <div data-buffer class="progress-buffer"></div>
                    <div data-time class="progress-time"></div>
                  </div><!-- progress -->
                </div>
                <div>
                  <span class="timeDisplay"><i data-currentTime>0:00</i> / <i data-duration>0:00</i></span>
                </div>
                <div>
                  <i data-mute class="fa fa-volume-up ui-icon"></i>
                </div>
                <div>
                  <div data-volume="100" class="volumeControl"><span class="ui-slider-handle"></span></div>
                </div>
              </div><!-- ui -->
              <i data-fullscreen class="fullscreen iconicfill-fullscreen" title="fullscreen"></i>
            </div>
          </div>
        </li>
        <li v-if="!list.length">
          <h6 class="noList">暂无数据...</h6>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NewsVideo',
    data (){
      return{
        isActive: 'isActive'
      }
    },
    props: {
      live: Object,
      list: Array,
      videoD: String
    },
    methods: {

    },
    mounted(){
      (function($){
        'use strict';

        /**
         * Constructor
         */
        var Video = function($element) {

          /**
           * Make the reference to the passed
           * in element globally accessible within
           * the Video constructor
           */
          this.$element = $element;

          /**
           * Kick off the application
           */
          this.init();
        };

        /* Alias prototype */
        var proto = Video.prototype;

        /**
         * Top level function
         */
        proto.init = function() {

          return this.setupHandlers()
            .createChildren()
            .enable();
        };

        /**
         * Used to bind 'this' for functions
         */
        proto.setupHandlers = function() {
          this.onPlayPauseHandler = this.playPause.bind(this);
          this.onMuteHandler = this.mute.bind(this);
          this.onTimeUpdateHandler = this.progress.bind(this);
          this.onSeekHandler = this.seek.bind(this);
          this.onFullscreenHandler = this.fullscreenMode.bind(this);
          this.onVolumeHandler = this.adjustVolume.bind(this);


          return this;
        };

        /**
         * Create jQuery selectors here
         */
        proto.createChildren = function() {
          this.$video = this.$element.find('.js-media');
          this.$media = this.$video[0];
          this.$playBtn = this.$element.find('[data-playPause]');
          this.$muteBtn = this.$element.find('[data-mute]');
          this.$volume = this.$element.find('[data-volume]');
          this.$timeBar = this.$element.find('[data-time]');
          this.$bufferBar = this.$element.find('[data-buffer]');
          this.$progress = this.$element.find('[data-progress]');
          this.$currentTime = this.$element.find('[data-currentTime]');
          this.$duration = this.$element.find('[data-duration]');
          this.$fullscreen = this.$element.find('[data-fullscreen]');

          return this;
        };

        /**
         * Event listeners and functions that need
         * to run on initialization
         */
        proto.enable = function() {
          this.$playBtn.on('click', this.onPlayPauseHandler);
          this.$muteBtn.on('click', this.onMuteHandler);
          this.$video.on('timeupdate', this.onTimeUpdateHandler)
            .on('loadedmetadata', function() {
              this.updateTimeDisplay(0, this.$media.duration);
            }.bind(this))
            .on('ended', function() {
              this.$playBtn.removeClass('fa-play fa-pause')
                .addClass('fa-undo');
              this.updateTime(100);
            }.bind(this))
          ;
          this.$progress.on('mousedown', this.onSeekHandler)
            .on('mouseup', this.onSeekHandler);
          this.$fullscreen.on('click', this.onFullscreenHandler);
          this.$volume.on('volumeChange', this.onVolumeHandler);

          return this;
        };

        /**
         * Get New Location
         *
         * Uses offsets within the tracking bar
         * to find the position in seconds that the
         * corresponds to in seconds of the video.
         *
         * Returns an object that has the new position
         * of the seek bar and the actual time time
         * seconds
         */
        proto.getNewLocation = function(e) {
          var seekBarOffset = this.$progress.offset().left;
          var mouseOffset = e.pageX;
          var mousePosInBar = mouseOffset - seekBarOffset;
          var seekBarWidth = this.$progress.width();
          var duration = this.$media.duration;
          var dist = Math.floor((mousePosInBar / seekBarWidth) * 100);
          var actualSeconds = (dist / 100) * duration;
          var newLocation = (actualSeconds/duration) * 100;

          var info = {
            newTime: newLocation,
            actualTime: actualSeconds
          };;

          return info;
        };

        /**
         * Seek
         *
         * Called on mousedown and mouseup in the progress bar
         * to set the position of the progress bar and time in the
         * video.
         */
        proto.seek = function(e) {
          var info = this.getNewLocation(e);
          this.$media.currentTime = info.actualTime; // Set the time
          this.updateTime(info.newTime);
        };

        /**
         * Play
         *
         * Plays or pauses the video
         */
        proto.playPause = function() {
          if (this.$media.paused) {
            this.play();
          } else {
            this.pause();
          }
        };

        proto.play = function() {
          this.$media.play();
          this.$playBtn.removeClass('fa-play fa-undo')
            .addClass('fa-pause');
        };
        proto.pause = function() {
          this.$media.pause();
          this.$playBtn.removeClass('fa-pause fa-undo')
            .addClass('fa-play');
        };


        /**
         * Mute
         *
         * Mutes the video
         */
        proto.mute = function() {
          if (this.$media.muted) {
            this.$media.muted = false;
          } else {
            this.$media.muted = true;
          }

          this.muteIconSwap();
        };

        proto.muteIconSwap = function() {
          if (this.$media.muted) {
            this.$muteBtn.removeClass('fa-volume-up')
              .addClass('fa-volume-off');
          } else {
            this.$muteBtn.removeClass('fa-volume-off')
              .addClass('fa-volume-up');
          }
        };

        /**
         * Volume
         *
         * Volume of the video
         */
        proto.adjustVolume = function() {
          var toVolume = this.$volume.data('volume') / 100;
          this.$media.volume = toVolume; // from 0 - 1
          if(toVolume === 0) {
            this.$media.muted = true;
          } else {
            this.$media.muted = false;
          }
          this.muteIconSwap();
        }

        /**
         * Progress
         *
         *
         */
        proto.progress = function() {
          var currentTime = Math.round(this.$media.currentTime);
          var duration = this.$media.duration;
          var locationPercent = (currentTime/duration) * 100;
          var buffered = this.$media.buffered.end(0);
          var bufferPercent = Math.floor((buffered/duration) * 100);

          this.updateTime(locationPercent);
          this.updateBuffer(bufferPercent);
          this.updateTimeDisplay(Math.floor(this.$media.currentTime), duration);

        };

        /**
         * Update Buffer
         *
         * Updates the width of the buffer bar.
         */
        proto.updateBuffer = function(percent) {
          this.$bufferBar.css('width', percent + '%');
        };

        /**
         * Update Time
         *
         * Updates the width of the seek bar.
         */
        proto.updateTime = function(percent) {
          this.$timeBar.css('width', percent + '%');
        };

        proto.updateTimeDisplay = function(currentTime, duration) {
          this.$currentTime.text(formatTime(currentTime));
          this.$duration.text(formatTime(duration));
        }

        function formatTime(s, m) {
          s = Math.floor( s );
          m = Math.floor( s / 60 );
          m = m >= 10 ? m : '0' + m;
          s = Math.floor( s % 60 );
          s = s >= 10 ? s : '0' + s;
          return m + ':' + s;
        }

        /**
         * Full screen
         *
         * Display video in fullscreen mode
         */
        proto.fullscreenMode = function() {
          var elem = this.$media;
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
          }
        }

        /**
         * Update src
         *
         * Update src of the video and reload
         */
        proto.updateSrc = function(newSource, poster) {
          var source = this.$video.find('source');
          console.log(source)
          $(source).attr('src', newSource);
          if(poster) {
            this.$video.attr('poster', poster);
          }
          this.$media.load();
        }


        // making it a jQuery plugin
        $.fn.video = function() {
          return this.each(function() {
            $(this).data('Video', new Video($(this)));
          });
        }


      })(jQuery);
// embedabled movies https://www.davestrailerpage.co.uk/
// use jQuery UI slider for volume control
      if($.fn.slider) {

        $('.volumeControl').slider({
          min: 0,
          max: 100,
          value: 100,
          slide: function( event, ui ) {
            $(this).data('volume', ui.value).trigger('volumeChange');
          }
        });
      }

// Initialize the Video instance
      $('.js-video').video();
    },
    watch: {
      // 监听数据的变化
      list() {
        this.$nextTick(() => {
          $('.js-video').video()
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .videoWrapper{
    .videoD{
      margin:0 !important;
      padding:0 !important;
      ul{
        padding:0 !important;
        li{
          padding-top:0 !important;
          .videoImg{
            padding-top:0 !important;
          }
          .js-video{
            border-radius: 0 !important;
          }
        }
      }
    }
    .js-video {
      position: relative;
      /*width:100%;*/
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding:10px;
    }

    /*********************
     * Elements inside js-video
     *********************/
    video {
      max-width: 100%;
      max-height: 350px;
      background-size: cover;
      background-position: center center;
    }

    .js-video button {
      -moz-appearance: none;
      -webkit-appearance: none;
    }

    /*********************
     * UI
     *********************/
    .playPause.ui-icon {
      position: absolute;
      top: 10px;
      left: 10px;
      right: 0;
      display: block;
      width: auto;
      bottom: 56px;
    }
    .playPause.ui-icon:before, .playPause.ui-icon:after {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .playPause.ui-icon:after {
      background:url(./../../../assets/ico/bf1.png) no-repeat center;
      background-size:100%;
      content: '';
      width: 80px;
      height: 80px;
      margin: -40px 0 0 -40px;
      /*background: rgba(0, 0, 0, 0.8);*/
      border-radius: 10px;
    }
    .playPause.ui-icon:before {
      font-size: 40px;
      line-height: 80px;
      color: rgba(244, 209, 126, 0.5);
      z-index: 2;
      top: 50%;
      left: 50%;
      margin: -40px 0 0 -14px;
    }
    .playPause.ui-icon.fa-pause:before, .playPause.ui-icon.fa-undo:before {
      margin-left: -17px;
    }
    .playPause.ui-icon.fa-pause {
      opacity: 0;
    }

    .ui {
      padding: 10px 1vw;
      font-size: 0;
      display: -webkit-flex;
      display: flex;
    }
    .ui > div:nth-of-type(1), .ui > div:nth-of-type(4) {
      padding-top: 8px;
    }
    .ui > div:nth-of-type(1) {
      -webkit-flex: 30 30 1px;
      flex: 30 30 1px;
      margin-right: 10px;
    }
    .ui > div:nth-of-type(2) {
      -webkit-flex: 1 0 60px;
      flex: 1 0 60px;
      font-size: 12px;
      margin-right: 10px;
      text-align: center;
      line-height: 20px;
    }
    .ui > div:nth-of-type(3) {
      -webkit-flex: 0 0 20px;
      flex: 0 0 20px;
      margin-right: 10px;
    }
    .ui > div:nth-of-type(4) {
      -webkit-flex: 0 0 60px;
      flex: 0 0 60px;
    }

    .timeDisplay {
      white-space: nowrap;
    }
    .timeDisplay i {
      font-style: normal;
    }

    .fullscreen {
      position: absolute;
      font-style: normal;
      left: 20px;
      bottom: 66px;
      display: block;
      width: 40px;
      height: 40px;
      text-align: center;
      cursor: pointer;
      -moz-transition: color 0.3s;
      -o-transition: color 0.3s;
      -webkit-transition: color 0.3s;
      transition: color 0.3s;
    }
    .fullscreen:before {
      font-size: 30px;
      line-height: 40px;
      color: rgba(244, 209, 126, 0.2);
    }
    .fullscreen:hover:before {
      color: rgba(244, 209, 126, 0.5);
    }

    .ui-icon {
      font-size: 20px;
      vertical-align: middle;
      width: 20px;
      margin-right: 10px;
      cursor: pointer;
    }

    /*********************
     * Progress
     *********************/
    .progress, .volumeControl {
      background: rgba(0, 0, 0, 0.1);
      width: 100%;
      position: relative;
      height: 5px;
      cursor: pointer;
      overflow: hidden;
      border-radius: 2px;
      border: 0;
    }

    .progress > * {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    .progress-time {
      background-color: black;
    }

    .anim {
      -moz-transition: width 1000ms linear;
      -o-transition: width 1000ms linear;
      -webkit-transition: width 1000ms linear;
      transition: width 1000ms linear;
    }

    .progress-buffer {
      background-color: rgba(0, 0, 0, 0.3);
      -moz-transition: width 250ms linear;
      -o-transition: width 250ms linear;
      -webkit-transition: width 250ms linear;
      transition: width 250ms linear;
    }

    .volumeControl {
      width: 90%;
      overflow: visible;
      position: relative;
      background: rgba(0, 0, 0, 0.3);
    }
    .volumeControl .ui-slider-handle {
      position: absolute;
      width: 9px;
      height: 9px;
      border: 0;
      top: -2px;
      background: transparent;
    }
    .volumeControl .ui-slider-handle:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: -50%;
      background: black;
      border-radius: 4px;
    }
    .volumeControl .ui-slider-handle:focus {
      outline: none;
    }
    .newsVideo{
      padding:20px;
      .thisVideo{
        background-color:white;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 15px;
        .leftImg{
          width:128px;
          height:128px;
        }
        .textCenter{
          text-align: left;
          margin-left:20px;
          /*margin-right:20px;*/
          padding-right:40px;
          border-right:1px solid #eee;
          h4{
            line-height:1.6;
            font-size:30px;
            margin-bottom:10px;
          }
          p{
            color:#999999;
            font-size:28px;
            span{
              padding:5px 10px;
              color:white;
              background-color:#e60012;
              font-size:18px;
              border-radius: 5px;
              margin-right:20px;
              i{
                width:10px;
                height:10px;
                background-color:white;
                border-radius: 50%;
                color:transparent;
                display: inline-block;
                margin-right:5px;
              }
            }
          }
        }
        .right-ico{
          margin-right:40px;
          margin-left:40px;
          .v-ico-1{
            display: inline-block;
            width:30px;
            height:48px;
            background:url(../../../assets/ico/video-ico-1.png) no-repeat center;
            background-size:100%;
          }
        }
      }
    }
    .videoList1{
      background-color:white;
      /*margin-top:20px;*/
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(../../../assets/ico/video-ico-2.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        padding:0 20px;
        .noList{
          padding:20px;
          color:#999;
          text-align: center;
          font-size:28px;
        }
        li{
          /*padding-top:20px;*/
          border-bottom:1px solid #eee;
          .tpVideo{
            .leftImg{
              img{
                width:98px;
                height:98px;
                border-radius: 50%;
              }
            }
            .textInfo{
              text-align: left;
              margin-left:20px;
              h4{
                font-size:30px;
                line-height:1.6;
                margin-bottom:20px;
              }
              p{
                color:#bbbbbb;
                font-size:24px;
                span{
                  margin-left:20px;
                }
              }
            }
          }
          .videoImg{
            padding:20px 0;
            /*height:400px;*/
            /*overflow: hidden;*/
            img{
              /*width:100%;*/
            }
            /*video{*/
            /*width:100%;*/
            /*height:100%;*/
            /*}*/
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>
