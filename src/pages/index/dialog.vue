<template>
  <div>
    <!--   {{value}}-->
    <!--  -->
    <el-dialog
        :visible.sync = "dialogVisible"
        width = "70%"
        :before-close = "handleClose"
    >
      <h3 id = "title">Effidit 文本编辑器下载</h3>
      <div id = "content">
        <p id = "label">Effidit 编辑器是一款带有 AI 辅助写作功能的文本编辑工具，其基础编辑功能包括：</p>
        <ul>
          <li>编辑普通文本文件；</li>
          <li>查看超大文件的内容；</li>
          <li>
            为某些类型的文件提供编辑和预览两种视图，比如给以Tab分割的文本文件提供表格视图，方便按照列对齐显示
          </li>
        </ul>
        <p id = "desc">
          与通常的文本编辑器相比，Effidit 编辑器的主要特色是内置 Effidit
          智能创作助手。此创作助手的主要目标是利用 AI
          技术来提升写作的效率，助力内容创作者产出更高质量的文档。Effidit
          的主要功能包括文本补全、文本纠错、文本润色、K2S（基于关键词的句子推荐与生成）、云输入法等。
          其中文本补全包括短语补全和句子补全，文本润色包括短语润色、文本改写、文本扩写等。
        </p>
        <el-row type="flex" justify="space-between" >
          <el-col :span="11" class="item flex-model">
            <img
                src = "data:image/png;base64,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"
                alt = "img" class = "pic"
            >
            <div class = "bd">
              <p class = "x-label">Windows</p>
              <div class = "b-box flex-model">
                <p class = "text">
                  默认界面语言
                </p>
                <div class = "lag-k light">中文</div>
                <div class = "lag-k">英文</div>
              </div>
            </div>
            <div class = "btn-box">
              <a href = "/effidit-v0.2.0-zh-setup.msi" target = "_blank" class = "btn">
                <p>立即下载</p>
              </a>
            </div>
          </el-col>
          <el-col :span="11" class="item flex-model">
            <img
              
              src = "data:image/png;base64,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"
              alt = "img" class = "pic"
          >
            <div class = "bd">
              <p class = "x-label">MAC
                <span>待上线</span>
              </p>
              <div class = "b-box flex-model">
                <p class = "text">
                  界面语言：中文、英文
                </p>
              </div>
            </div>
            <div class = "btn-box">
              <a class = "btn disable">
                <p>立即下载</p>
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
    
    </el-dialog>
  </div>

</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        dialogVisible: false,
      };
    },
    watch: {
      value(val) {
        this.dialogVisible = val;
      },
      dialogVisible(val) {
        this.$emit('input', val);
      },
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？').then(_ => {
          done();
        }).catch(_ => {
        });
      },
    },
  };
</script>
<style scoped lang = "scss">
  ::v-deep .el-dialog__body {
    padding: 2vh 4vw 100px;
  }
  
  ::v-deep .el-dialog{
    border-radius: 0.6vw;
  }
  
  #title {
    width: 100%;
    font-size: 28px;
    color: #000;
    text-align: center;
    line-height: 41px;
    font-weight: 700;
    margin-bottom: 22px;
    margin-top: 0;
  }
  
  #content {
    #label {
      font-size: 12px;
      color: #000;
      line-height: 21px;
      margin-bottom: 8px;
      margin-top: 0;
      width: 100%;
      overflow: hidden;
    }
    
    li {
      font-size: 12px;
      color: #000;
      line-height: 21px;
      margin-bottom: 6px;
      padding-left: 8px;
      position: relative;
    }
    
    #desc {
      font-size: 12px;
      color: #000;
      line-height: 21px;
      margin-bottom: 28px;
      width: 100%;
    }
    
    .flex-model{
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    
    .item {
      background: #f3f8ff;
      border-radius: 14px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 42px 21px;
      
      .pic {
        width: 43px;
        height: 43px;
        margin-right: 11px;
      }
      
      .bd {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        
        .x-label {
          font-size: 21px;
          color: #000;
          font-weight: 700;
          margin-bottom: 4px;
          margin-top: 0;
        }
        
        .b-box {
          width: 100%;
          
          .text {
            font-size: 8px;
            color: rgba(0, 0, 0, .4);
            line-height: 21px;
            margin-right: 6px;
            margin-top: 0;
            margin-bottom: 0;
          }
          
          .lag-k {
            padding: 0 12px;
            height: 16px;
            border: 1px solid rgba(0, 0, 0, .6);
            border-radius: 4px;
            line-height: 15px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-align: center;
            font-size: 8px;
            color: rgba(0, 0, 0, .6);
            margin-right: 6px;
            cursor: pointer;
            
            &.light {
              border: 1px solid #1979ff;
              color: #1979ff;
            }
          }
        }
      }
      
      .btn {
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        padding: 0 28px;
        height: 42px;
        background: #1979ff;
        border-radius: 21px;
        line-height: 42px;
        display: block;
        text-align: center;
        
        p {
          display: inline-block;
          position: relative;
          font-size: 14px;
          color: #fff;
          letter-spacing: 2px;
          font-weight: 700;
          padding-left: 22px;
          margin: 0;
          
          &::before {
            content: " ";
            width: 15px;
            height: 15px;
            position: absolute;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAACE0lEQVRoBe2YPUsDQRCGc2IlglgIIiL6F6wtxFKwsbGws7L2xwgqdoLYaGFhoVhoY6O9ZYqoheDHDzA+k+SOyZA1dxtvc+gOvDgfuzvvzGwuXmq1KLEDA3UgGWi3Y3Oz2ZwjNKXC9SRJXpVdbZUCdoGW7bIYj5R1cKhzYwGhOu3KEyfg6kwof5xAqE678sQJuDoTyh8nEKrTrjxxAq7OhPL/7wnw//ICOAbjRTrO+klwAmaK7PvVtSQX8nUgcguyItCd7wPEhPw9EHkE4Ysg6TxIyaO2JCsCq2cB+DX59q52EdO+3fX9DLyR8NkkXcK+gFU2CR0X8thXYFH70Rvg0/jKNyE0Ae6AFZnEvnHuYKfXRoeuMcbKZ+vIQHJXEU+aJbq9bhIeLvm0Joi4ihCSLqkGec8iqkW+YBHlkbezTokV+csZP10nL/K5eeVe2KciRxFe5CVVbl65F/YpoJNUJnEG3sER8H5UsrdLbPrst1FZpYP8lpnFtD+03o+X7zdx6Dqc+WIBztYECvypCXzopvHhmdX2MHQ42HeFF8tDT+DGBPd6HGCWlGd2GnhgMjwYuzaqHOfoa8peRW9wkHINXT21DLJnPURlGpdgxS6qiC03ZJmvp66OCumWEPhC2QSysGpyDaENS15IZhNIGTMJ8W2BdSCvf97vq+wdROShIs2Uq33YafAg58W9sQOxA7EDJXTgG+NSrrDUR/85AAAAAElFTkSuQmCC) no-repeat 50%;
            background-size: cover;
          }
        }
      }
    }
    
  }
</style>
