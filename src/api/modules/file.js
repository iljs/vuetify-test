export default function(instance) {
    return {
      uploadFile(payload) {
        console.log(payload);
        return instance.post('sys/uploadFile', payload)
      },
    }
  }
  