<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <side-bar :categories="categories" @sideBarClick="selectItem"/>
    <div class="category-content">
      <scroll class="category_scroll" :data="[categoryData]" ref="category_scroll">
        <tab-content-category :subcategories="showSubcategory"/>
      </scroll>
    </div>

  </div>
</template>

<script>
  import navBar from 'common/navbar/NavBar'
  import scroll from 'common/scroll/Scroll'

  import sideBar from './childComps/SideBar'
  import tabContentCategory from './childComps/TabContentCategory'

  import {getCategory, getSubcategory, getCategoryDetail} from "network/category";
  import {debounce} from '@/common/util'


  export default {
		name: "category",
    components: {
		  navBar,
      sideBar,
      scroll,
      tabContentCategory,
    },
    data() {
		  return {
		    categories: [],
        categoryData: {},
        currentIndex: -1,
      }
    },
    created() {
		  // 1.请求分类数据
      this.getCategory()
    },
    mounted(){
      // 防抖
      var refresh = debounce(this.$refs.category_scroll.refresh,400)
      this.$bus.$on("categoryImgLoad",()=>{
        refresh()
      })
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
		  getCategory() {
		    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.category.list
			    // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this.getSubcategories(0)
        })
      },
      getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this.getCategoryDetail('pop')
          this.getCategoryDetail('sell')
          this.getCategoryDetail('new')
        })
      },
      getCategoryDetail(type) {
		    // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
		      this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      /**
       * 事件响应相关的方法
       */
      selectItem(index) {
        this.getSubcategories(index)
      },
    },
	}
</script>

<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  /* font-weight: 700; */
  color: #fff;
  z-index: 99;
}

.category-content {
  position: absolute;
  left: 60px;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
  overflow: hidden;
  height: calc(100% - 93px);
}
.tab-control{
  width:calc(100vw - 60px);
  position: absolute;
  left:0px;
  right:0px;
}
.category_scroll {
  height: 100%;
  flex: 1;
}  
</style>
