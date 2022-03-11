<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div v-if="myStream === null">
          <button class="button" @click="connect">CONNECT</button>
        </div>
        <div v-else>
          <video
            id="my-video"
            width="400px"
            autoplay
            playsinline
            muted
            :srcObject="myStream"
          ></video>
        </div>
        <p>{{ myID }}</p>
      </div>
      <!-- <div class="column is-half" v-if="theirStream.length > 0">
        <video
          id="their-video"
          width="400px"
          autoplay
          playsinline
          :srcObject="theirStream[0]"
        ></video>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// const config = useRuntimeConfig();
// console.log(config.skyway);
// const key = config.skyway;
// console.log(key);
</script>

<script lang="ts">
import Peer, { SfuRoom } from "skyway-js";
export default defineComponent({
  data() {
    return {
      peer: null,
      sfuroom: null,
      myStream: null,
      myID: "",
      theirID: "",
    };
  },
  async created() {
    const config = useRuntimeConfig();
    // const peer = new Peer({ key: config.skyway });
    this.peer = new Peer({ key: config.skyway });
    this.peer.on("open", () => {
      this.myID = this.peer.id;
    });
  },
  methods: {
    async connect() {
      const myStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.myStream = myStream;
      this.sfuRoom = this.peer.joinRoom("test", {
        mode: "sfu",
        stream: this.myStream,
      });
      this.sfuRoom.on("open", () => {
        console.log("opened");
      });
      //   console.log(sfuRoom.remoteStreams);
    },
  },
  //   computed: {
  //     theirStream() {
  //       if (this.sfuRoom === null) {
  //         return [];
  //       } else {
  //         return this.sfuRoom.remoteStreams;
  //       }
  //     },
  //   },
});
</script>