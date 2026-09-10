<template>
  <div>
    <div class="youtube-embed-container">
      <!-- Preview State -->
      <button v-if="!isLoaded" class="youtube-thumbnail-wrapper" @click="loadVideo"
        :aria-label="`Play video: ${title}`">
        <img :src="`https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`" :alt="`Thumbnail for ${title}`"
          class="youtube-thumbnail" loading="lazy" />
        <!-- Play Button Overlay -->
        <div class="youtube-play-button" aria-hidden="true">
          <svg viewBox="0 0 68 48" version="1.1" width="100%" height="100%">
            <path class="bg"
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#f00"></path>
            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
          </svg>
        </div>
      </button>

      <!-- Active State: Constructing dynamic URL with autoplay and start time -->
      <iframe v-else :src="embedUrl" :title="title" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <p>(Watch on
      YouTube <a :href="`https://www.youtube.com/watch?v=${props.videoId}`" target="_blank"
        rel="noopener noreferrer">here</a>)</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'YouTube video player'
  },
  start: {
    type: [String, Number],
    default: 0
  }
})

const isLoaded = ref(false)

const loadVideo = () => {
  isLoaded.value = true
}

// Compute the YouTube Embed URL dynamically based on properties
const embedUrl = computed(() => {
  let url = `https://www.youtube.com/watch?v=${props.videoId}&autoplay=1`
  if (props.start && Number(props.start) > 0) {
    url += `&start=${props.start}`
  }
  return url
})
</script>

<style scoped>
.youtube-embed-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  margin: 1.5rem 0;
  border-radius: 8px;
  background-color: #000;
}

.youtube-embed-container iframe,
.youtube-thumbnail-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.youtube-thumbnail-wrapper {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
}

.youtube-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.youtube-thumbnail-wrapper:hover .youtube-thumbnail {
  opacity: 0.8;
}

/* Play Button Styling */
.youtube-play-button {
  position: absolute;
  width: 68px;
  height: 48px;
  transition: transform 0.2s ease;
}

.youtube-play-button path.bg {
  fill: #212121;
  opacity: 0.8;
  transition: fill 0.2s ease, opacity 0.2s ease;
}

.youtube-thumbnail-wrapper:hover .youtube-play-button path.bg {
  fill: #ff0000;
  opacity: 1;
}

.youtube-thumbnail-wrapper:hover .youtube-play-button {
  transform: scale(1.1);
}
</style>
