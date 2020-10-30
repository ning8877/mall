<template>
  <div id="comment-info" v-if="commentInfo !== null">
    <div class="info-header">
      <div class="header-tile">用户评价</div>
      <div class="header-more">
        更多
        <!-- <van-icon name="arrow-down" /> -->
      </div>
    </div>
    <div class="info-user" v-if="commentInfo.user">
      <img class="user-avatar" :src="commentInfo.user.avatar" alt="">
      <span class="user-name">{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/util'
export default {
  name:'detailCommentInfo',
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      let date = new Date(value * 1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
#comment-info{
  padding: 5px 12px 15px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  margin-bottom:20px;
}
/* 评价头信息 */
.info-header{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
/* 用户信息 */
.info-user{
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
}
.info-user img.user-avatar{
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right:10px;
}
.info-user .user-name{
  vertical-align: text-bottom;
  color: #222;
}
.info-detail>p{
  font-size: 14px;
  padding:10px 0px;
  color: #777;
  line-height: 1.5;
}
/* 日期及商品样式 */
.info-other{
  font-size: 12px;
  color:#999
}
.date{
  margin-right: 5px;
}
</style>