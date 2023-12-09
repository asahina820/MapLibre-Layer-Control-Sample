const map = new maplibregl.Map({
  container: 'map',
  center: [139.767125, 35.681236], // 中心座標
  zoom: 15, // ズームレベル
  style: {
    // スタイル仕様のバージョン番号。8を指定する
    version: 8,
    // データソース
    sources: {
      // 地理院地図淡色地図
      'gsi-tile': {
        // ソースの種類。vector、raster、raster-dem、geojson、image、video のいずれか
        type: 'raster',
        // タイルソースのURL 今回は地理院の淡色地図タイル
        tiles: ['https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'],
        // タイルの解像度。単位はピクセル、デフォルトは512
        tileSize: 256,
        // データの帰属
        attribution: "地図の出典：<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>",
      },
      // 地理院地図航空写真
      'gsi-photo': {
        type: 'raster',
        tiles: ['https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'],
        tileSize: 256,
        attribution: "地図の出典：<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>",
      },
    },
    // 表示するレイヤ
    layers: [
      {
        // 一意のレイヤID
        id: 'gsi-layer',
        // レイヤの種類。background、fill、line、symbol、raster、circle、fill-extrusion、heatmap、hillshade のいずれか
        type: 'raster',
        // データソースの指定
        source: 'gsi-tile',
      },
      {
        id: 'photo-layer',
        type: 'raster',
        source: 'gsi-photo',
        layout: {
          visibility: 'none',
        },
      },
    ],
  },
});

function changeMap(selectedMap) {
  let unSelectedMap = null;
  if (selectedMap === 'photo-layer') {
    unSelectedMap = 'pale-layer';
  } else {
    unSelectedMap = 'photo-layer';
  }
  map.setLayoutProperty(unSelectedMap, 'visibility', 'none');
  map.setLayoutProperty(selectedMap, 'visibility', 'visible');
}
