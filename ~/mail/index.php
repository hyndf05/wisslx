<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>전체메일 : WiSSLX Mail</title>
    <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="/d/css/od/mail.css" />
    <link rel="stylesheet" href="/d/css/root.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script id="passiveScripts" defer src="/d/js/mni.js"></script>
    <script id="passiveScripts" defer src="/d/js/od/mail.js"></script>
  </head>
  <body>
    <div class="wrap">
      <header>
        <div class="inner">
          <div class="item">
            <span>
              <a href="/">W</a>
            </span>
            <span>
              <a href="/~/mail">메일</a>
            </span>
          </div>
          <div class="item">
            <img src="https://uploads.hyndf05.repl.co/wisslx/icons/search.svg">
          </div>
        </div>
      </header>
      <div class="category">
        <div class="inner">
          <div class="util">
            <div class="write">
              <div class="button">
                <button class="write-button-btn" id="mail">
                  <span>메일 쓰기</span>
                </button>
                <button class="write-button-btn" id="tome">
                  <span>내게 쓰기</span>
                </button>
                <span class="write-button-btn-sep"></span>
              </div>
            </div>
            <div class="util-sub">
              <div class="util-box">
                <button class="util-box-btn" id="yet">
                  <span class="material-symbols-outlined">mark_email_unread</span>
                  <span>안읽음</span>
                </button>
                <button class="util-box-btn" id="important">
                  <span class="material-symbols-outlined">star</span>
                  <span>중요</span>
                </button>
                <button class="util-box-btn" id="attach">
                  <span class="material-symbols-outlined">attachment</span>
                  <span>첨부</span>
                </button>
                <button class="util-box-btn" id="vTo2">
                  <span class="material-symbols-outlined">contact_page</span>
                  <span>나에게</span>
                </button>
              </div>
            </div>
          </div>
          <div class="option">
            <div class="option-list">
              <div class="option-item" id="vAll">
                <span>전체메일</span>
              </div>
              <div class="option-item" id="vReceive">
                <span>받은메일함</span>
              </div>
              <div class="option-item" id="vSend">
                <span>보낸메일함</span>
              </div>
              <div class="option-item" id="vStorage">
                <span>임시보관함</span>
              </div>
              <div class="option-item" id="vTo">
                <span>내게쓴메일함</span>
              </div>
              <div class="option-item" id="vSpam">
                <span>스팸메일함</span>
              </div>
              <div class="option-item" id="vBin">
                <span>휴지통</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="core">
        <div class="inner">
          <div class="mzp" id="rvAll">
            all
          </div>
          <div class="mzp" id="rvReceive">
            receive
          </div>
          <div class="mzp" id="rvSend">
            send
          </div>
          <div class="mzp" id="rvStorage">
            storage
          </div>
          <div class="mzp" id="rvTo">
            tome
          </div>
          <div class="mzp" id="rvSpam">
            spam
          </div>
          <div class="mzp" id="rvBin">
            bin
          </div>
        </div>
      </div>
    </div>
  </body>
</html>