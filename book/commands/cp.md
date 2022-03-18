---
title: cp
layout: command
version: 0.59.1
usage: |
  Copy files.
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> cp (source) (destination) --recursive```

## Parameters

 -  `source`: the place to copy from
 -  `destination`: the place to copy to
 -  `--recursive`: copy recursively through subdirectories

## Examples

Copy myfile to dir_b
```shell
> cp myfile dir_b
```

Recursively copy dir_a to dir_b
```shell
> cp -r dir_a dir_b
```