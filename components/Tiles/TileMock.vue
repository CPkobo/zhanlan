<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p>縦（垂直方向）に分割された最も上のタイル</p>
          </article>
          <article class="tile is-child notification is-link">
            <p>縦（垂直方向）に分割された中間のタイル</p>
          </article>
          <article class="tile is-child notification is-warning">
            <p>縦（垂直方向）に分割された最も下のタイル</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p>横（水平方向）に分割された真ん中のタイル</p>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p>左下のワイド幅のタイル</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-success">
        <div class="content">
          <p>右端の高いタイル</p>
        </div>
      </article>
    </div>
  </div>
</template>