<template>
    <v-card>
      <v-card-title>
        api root test
      </v-card-title>
      <v-textarea v-model="text" />
     <v-card-actions>
      <v-btn @click="test">
        test
      </v-btn>
      <v-btn @click="hello">
        hello
      </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data(){
    return {
      text: ''
    }
  },
  methods: {
    async test() {
      const result = await this.$axios.get('/api')
      this.text = result.data
    },
    async hello() {
      const result = await this.$axios.get('/api/hello')
      this.text = result.data
    }
  }

}
</script>

