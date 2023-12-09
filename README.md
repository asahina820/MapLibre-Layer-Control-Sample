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
