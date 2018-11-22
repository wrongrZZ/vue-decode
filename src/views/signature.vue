<template>
  <div>
    <VueSignaturePad
     id="signature"
      width="500px"
      height="500px"
      ref="signaturePad"
    />
    <div>
      <button @click="save">Save</button>
      <button @click="clear">clear</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MySignaturePad',
  methods: {
    clear () {
      this.$refs.signaturePad.clearSignature()
    },
    save () {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      console.log(isEmpty)
      console.log(data)
    }
  }
}
</script>
<style scoped>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
