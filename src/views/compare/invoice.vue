<template>
    <h1>比对页面</h1>
    <router-link to="/">去登录页面</router-link>
    <br/>
    <upload-btn
    size="small"
    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    @upload="handleUpload"
    >批量上传</upload-btn>
</template>
<script>
// import UploadBtn from '@/components/UploadBtn'
// import { getAllAndroidPlugins, getConfigsByProductId, addNewAndroidPlugin } from '@/utils/request'
// export default {
//   components: {
//     UploadBtn
//   },
//   methods: {
//     handleUpload (file) {
//       // https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/append
//       const form = new FormData()
//       form.append('file', file, file.name)
//       // 如果在上传文件的同时，还要提交更多的信息，就像下面这样写
//       // form.append("key1", "value");
//       // 设置文件上传的请示头
//       // const requestConfig = {
//       //  headers: {
//       //     'Content-Type': 'multipart/form-data'
//       //   }
//       //  };
//       // 使用 axios 上传文件
//       uploadFile(form).then(resp => {
//         this.$notify.success(resp.msg)
//         this.fetchBrandList()
//       })
//     }
//   }
// }
// export function uploadFile (data) {
//   return addNewAndroidPlugin({
//     method: 'post',
//     url: '/mobile/brand/uploadFile',
//     data,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
// }
</script>
