<template>
  <v-row>
    <v-col cols="4">

    </v-col>
    <v-col cols="8">
      <div v-if="scoreHistory" class="py-3">
        <v-chip v-for="score in scoreHistory.data" class="my-1 mx-1">
          {{ score.score }}
        </v-chip>
      </div>
      <GameIFrame />
    </v-col>
  </v-row>
</template>

<script setup>
import GameIFrame from './GameIFrame.vue';
import axios from 'axios';
import { onMounted } from 'vue';
import echo from '../echo.js';

const scoreHistory = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/get_scores?limit=30');
    scoreHistory.value = response.data; // Set the response data into the reactive value
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

echo.channel('Scores').listen('NewScoreEvent', (event) => {
    fetchData();
 });

onMounted(fetchData); // Call fetchData when the component is mounted

</script>
