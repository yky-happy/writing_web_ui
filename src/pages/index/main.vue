<template>
  <div>
    <el-container>
      <el-header id = "header">
        <p id = "title">智能写作，写你所想</p>
        <p id = "subtitle">
          腾讯 AI Lab 研发的智能创作助手支持通用版和学术版两个版本，
          智能创作助手提供智能纠错、文本补全、文本改写、文本扩写、词语推荐、句子推荐与生成等功能，帮助您轻松完成中英文写作，提高写作效率
        </p>
      </el-header>
      <el-main>
        
        <el-row id = "icon-main">
          <ul id = "icon-main-list">
            <li v-for = "(values,index) in icon_list" :key = "index">
              <img :src = "values.img" alt = "img">
              <div class = "icon-main-list-content" style="{ backgroundColor:values.color }">
                <h3>{{ values.title }}</h3>
                <p v-for = "(desc,index) in values.desc">{{ desc }}</p>
              </div>
            </li>
          </ul>
        </el-row>
        
        <el-row id = "text-boxs">
          <el-row class = "item" v-for = "(values,index) in text_boxs" :key = "index">
            <div class = "text-box" v-if = "index % 2 === 0">
              <p class = "title">{{ values.title }}</p>
              <p class = "desc">{{ values.desc }}</p>
            </div>
            <div class = "pic-box" v-if = "index % 2 === 0">
              <img :src = "values.img" alt = "img" class = "pic">
            </div>
            <div class = "pic-box" v-if = "index % 2 === 1">
              <img :src = "values.img" alt = "img" class = "pic">
            </div>
            <div class = "text-box" v-if = "index % 2 === 1">
              <p class = "title">{{ values.title }}</p>
              <p class = "desc">{{ values.desc }}</p>
            </div>
          </el-row>
        </el-row>
      
      </el-main>
    </el-container>
    <el-footer id = "footer">
      <div class = "logo-box">
        <ul>
          <li><img></li>
          <li><img></li>
          <li><img></li>
        </ul>
      </div>
      <p id = "copyring">Copyright © 1998 - 2022 Tencent. All Rights Reserved.</p>
    </el-footer>
    
  </div>
</template>

<script>

  export default {
    name: 'app-main',
    data() {
      return {
        icon_list: [
          {
            img: require('@/assets/index/icon-1.png'),
            title: '智能纠错',
            desc: [
              '中文纠错',
              '英文纠错',
            ],
            color:"#E2EDFE"
          },
          {
            img: require('@/assets/index/icon-2.png'),
            title: '文本补全',
            desc: [
              '短语补全',
              '网络例句',
              'AI续写',
            ],
            color:"#E3F6F0"
          },
          {
            img: require('@/assets/index/icon-3.png'),
            title: '文本润色',
            desc: [
              '短语润色',
              '句子改写',
              '句子扩写',
            ],
            color:"#F8F3E7"
          },
          {
            img: require('@/assets/index/icon-4.png'),
            title: '超级网典',
            desc: [
              '词语推荐',
              '句子推荐',
              '句子生成',
            ],
            color:"#EBE9FC"
          },
        ],
        text_boxs: [
          {
            title: '短语补全',
            desc: '以输入内容作为上下文，自动补全短语，提高写作效率',
            img: require('@/assets/index/1.png'),
          },
          {
            title: '句子补全',
            desc: '给定句子前缀，智能生成逻辑通顺且完整的句子，补全结果中包含检索结果及AI生成结果',
            img: require('@/assets/index/2.png'),
          },
          {
            title: '风格化文本续写',
            desc: '根据用户输入的前缀和选择的风格（现支持科幻、军事、武侠、职场四种风格）进行续写，协助创作风格鲜明、妙趣横生的新内容。',
            img: require('@/assets/index/3.png'),
          },
          {
            title: '智能纠错',
            desc: '强大的智能纠错功能，自动检测输入文本中的错别字及拼写错误并给出修改建议，有效地处理替换、插入和删除三种类型的错误',
            img: require('@/assets/index/4.png'),
          },
          {
            title: '智能纠错（英文）',
            desc: '提供英文可解释性语法纠错及拼写检查',
            img: require('@/assets/index/5.png'),
          },
          {
            title: '短语润色',
            desc: '选中句子中的词，智能推荐更加贴合语境的相似候选词，使整个句子表达更加精准生动',
            img: require('@/assets/index/6.png'),
          },
          {
            title: '句子润色',
            desc: '句子润色包括句子改写和句子扩写。句子改写能够保留句子语义的同时，智能改写句子，以另外一种形式重新表达原句语义，增强句子的多样性；句子扩写则是保留句子语义的同时，对句子核心词汇进行修饰，生成表达更丰富的长句',
            img: require('@/assets/index/7.png'),
          },
          {
            title: '句子润色（英文）',
            desc: '同时提供英文句子的改写及扩写功能',
            img: require('@/assets/index/8.png'),
          },
          {
            title: '例句推荐',
            desc: '给定关键词，检索现有文章中的例子作为例句，同时将关键词按顺序智能补全为完整句子（支持跨语言检索，即输入中文关键词，返回英文例句）',
            img: require('@/assets/index/9.png'),
          },
          {
            title: '学术版例句推荐',
            desc: '给定关键词，检索现有论文中的例子作为例句，并且支持跨语言检索',
            img: require('@/assets/index/10.png'),
          },
          {
            title: '词语推荐(单语词典)',
            desc: '根据所输入的关键词，推荐近义词、反义词、同类词、修饰词、相关实体等',
            img: require('@/assets/index/11.png'),
          },
          {
            title: '词语推荐(双语词典)',
            desc: '基于翻译关系的跨语言词语推荐',
            img: require('@/assets/index/12.png'),
          },
          {
            title: '论文搜索',
            desc: '给定关键词，智能检索最相关最经典的论文',
            img: require('@/assets/index/13.png'),
          },
          {
            title: '云输入法',
            desc: '更加精准及丰富的候选结果，更高效的输入效率，同时提供英文输入法',
            img: require('@/assets/index/14.png'),
          },
        ],
      };
    }
  };
</script>

<style scoped lang = "scss">
  .el-container {
    width: 100%;
    overflow: hidden;
    padding: 72px 10vw 0;
  }
  
  #header {
    height: auto !important;
  }
  
  #title {
    font-size: 36px;
    color: #000;
    letter-spacing: 3px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }
  
  #subtitle {
    font-size: 18px;
    color: #000;
    letter-spacing: 0;
    text-align: center;
    line-height: 32px;
    max-width: 830px;
    margin: 0 auto;
    white-space: pre-line;
  }
  
  #icon-main {
    margin-top: 72px;
    
    #icon-main-list {
      display: flex;
      justify-content: space-around;
      
      .icon-main-list-content {
        padding: 72px 0 0 32px;
        
        h3 {
          color: rgba(0, 0, 0, .8);
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 12px;
          margin-top: 0;
        }
        
        p {
          color: #1979ff;
          font-size: 16px;
          font-weight: 400;
          line-height: 32px;
          margin: 0;
          padding: 0;
        }
      }
    }
    
    li, ul {
      list-style: none;
      padding: 0;
    }
    
    li {
      width: 240px;
      height: 251px;
      border-radius: 20px;
      background: rgba(25, 121, 255, .1);
      position: relative;
      
      img {
        position: absolute;
        top: -24px;
        left: 24px;
        width: 88px;
        height: 88px;
      }
      
    }
    
  }
  
  #text-boxs {
    
    .item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 100%;
      overflow: hidden;
      margin: 0 auto 40px;
      
      .text-box {
        margin-top: 90px;
        position: relative;
        padding-left: 37px;
        
        &::before {
          content: " ";
          width: 26px;
          height: 169px;
          background-image: url(@/assets/index/aside.png);
          background-size: cover;
          position: absolute;
          left: 0;
          top: 0;
        }
        
        .title {
          font-size: 30px;
          color: rgba(0, 0, 0, .9);
          letter-spacing: 0;
          line-height: 47px;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 14px;
          word-wrap: break-word;
          word-break: keep-all;
        }
        
        .desc {
          font-size: 18px;
          color: #5f6368;
          letter-spacing: 0;
          line-height: 32px;
          width: 446px;
        }
        
      }
      
      img {
        width: 586px;
      }
      
    }
    
    
  }
  
  #footer {
    width: 100%;
    height: 180px !important;
    background: #16171b;
    overflow: hidden;
    margin-top: 97px;
    text-align: center;
    
    #copyring {
      font-size: 12px;
      color: #fff;
      letter-spacing: 0;
      text-align: center;
      margin-top: 22px;
    }
  }


</style>
