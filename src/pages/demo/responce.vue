<template>
  <div class = "side">
    <div class = "block=1">
      <div class = "state-box" style = ""><!---->
        <div class = "icon-block"><img
            
            class = "icon"
            src = "data:image/png;base64,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"
        >
          <p class = "label">内容为空，无纠错结果</p>
          <p class = "desc">输入一些内容吧</p></div> <!----></div>
      <div class = "title g-clr" style = ""><p>智能纠错</p> <span
          class = "num"
      >0</span>
        <div class = "refresh" style = "">
          纠错刷新
        </div>
      </div> <!----> <!---->
      <div class = "list-block"></div>
    </div> <!----> <!----> <!----> <!---->
    <div class = "toast">已复制</div>
    <div class = "toast">已复制论文标题</div>
  </div>
</template>

<script>
  export default {
    name: 'responce',
  };
</script>

<style lang = "scss" scoped>
  .side {
    padding: 30px 25px 0;
    min-height: 1px;
    height: calc(100vh - 120px);
    
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    
    .toast{
      display: none;
    }
    
    .state-box {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      
      .icon-block {
        width: 100%;
        text-align: center;
        
        .icon {
          width: 150px;
          display: block;
          margin: 0 auto;
          padding: 0;
        }
        
        .label {
          font-size: 16px;
          color: #333;
          letter-spacing: .29px;
          font-weight: 700;
          min-width: 320px;
          margin: 0;
          padding: 0;
        }
        
        .desc {
          font-size: 14px;
          letter-spacing: 1.17px;
          line-height: 30px;
          white-space: nowrap;
          color: #999;
          margin: 0;
          padding: 0;
        }
      }
    }
    
    .title {
      padding-left: 0;
      margin-bottom: 18px;
      width: 100%;
      overflow: visible;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      zoom: 1;
      
      p {
        font-size: 16px;
        color: #333;
        letter-spacing: 1.33px;
        font-weight: 700;
        margin-right: 4px;
        float: left;
        line-height: 22px;
        margin-top: 0;
        margin-bottom: 0;
      }
      
      span {
        font-size: 12px;
        color: #fff;
        letter-spacing: 1px;
        padding: 0 6px;
        line-height: 18px;
        float: left;
        background: #ff7a7a;
        border-radius: 9px;
        font-weight: 700;
        margin-top: 3px;
      }
      
      .refresh {
        float: right;
        font-size: 14px;
        color: #1979ff;
        letter-spacing: 1.17px;
        font-weight: 700;
        position: relative;
        padding-left: 24px;
        line-height: 22px;
        cursor: pointer;
        
        &::before {
          content: " ";
          width: 16px;
          height: 16px;
          background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzM4ODFFOCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOCAuMjVjMi4yNzMgMCA0LjM4OC45ODUgNS44NSAyLjY2N2EuNzUuNzUgMCAwMS0xLjEzMi45ODRBNi4yNSA2LjI1IDAgMTAxNC4yNSA4YS43NS43NSAwIDExMS41IDBBNy43NSA3Ljc1IDAgMTE4IC4yNXoiLz48cGF0aCBkPSJNMTAuMTcgNC4xNjZhLjc1Ljc1IDAgMDEuNzM0LS42NTlsLjEwMi4wMDYgMi4yMzMuMjc0LjI3NC0yLjIzM2EuNzUuNzUgMCAwMS43MzQtLjY1OWwuMTAyLjAwNmEuNzUuNzUgMCAwMS42NTkuNzM0bC0uMDA2LjEwMi0uMzY1IDIuOTc3YS43NS43NSAwIDAxLS43MzQuNjU5bC0uMTAyLS4wMDYtMi45NzgtLjM2NWEuNzUuNzUgMCAwMS0uNjUzLS44MzZ6Ii8+PC9nPjwvc3ZnPg==) no-repeat 50%;
          background-size: cover;
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
      
    }
  }
</style>
