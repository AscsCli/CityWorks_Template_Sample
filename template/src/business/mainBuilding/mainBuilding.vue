<template>
    <div>
        <rk-section :model="'重点建筑'">
            <listMenu  :model="lists" :fly="flyToObject"></listMenu >
        </rk-section>
    </div>
</template>
<script>

  export default {
    data() {
      return {
        close: '../../static/images/close.png',
        lists: [
          {
            icon: 'icon-kongjianxinxi',
            name: ' 竹坑试点重点企业',
            show: false,
            children: [
              {
                name: '坪山福万佳商场',
                children: []
              },
              {
                name: '高先电子',
                children: []
              },
            ]
          },
          {
            icon: 'icon-kongjianxinxi',
            name: '党政机关',
            show: false,
            children: [
              {
                name: '区政府',
                children: []
              },
              {
                name: '区委',
                children: []
              },
              {
                name: '政协',
                children: []
              },
              {
                name: '公安局',
                icon: 'icon-kongjianxinxi',
                show: false,
                children: [

                  {
                    name: '派出所',
                    icon: 'icon-kongjianxinxi',
                    show: false,
                    children: [
                      {
                        name: '竹坑社区警务室',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '人员密集场所',
            icon: 'icon-kongjianxinxi',
            show: false,
            children: [
              {
                name: '养老院',
                meta: { text: 'ACL' },
                children: []
              }
            ]
          }
        ],
        showOfList: true
      }
    },
    methods: {
      flyToObject(item) {

      }
    }
  }
</script>
