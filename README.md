# MapLibre-Layer-Control-Sample

MapLibre GL JSでsetLayoutPropertyを使ってレイヤの表示/非表示を切り替えるサンプルコードです。

非表示にする場合

```
map.setLayoutProperty(unSelectedMap, 'visibility', 'none');
```

表示する場合

```
map.setLayoutProperty(selectedMap, 'visibility', 'visible');
```

![Animation](https://github.com/asahina820/MapLibre-Layer-Control-Sample/assets/83101503/64bcc703-a660-400c-b326-3c886f2420b8)
