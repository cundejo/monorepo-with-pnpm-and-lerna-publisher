This is a POC to see how Lerna publish packages and their dependencies in a registry in a topological order.

These are the rules for the packages:
- `aaa` depends on `bbb` and `ccc`
- `bbb` depends on `ccc`
- `ccc` depends on `ddd`
- `ddd` has no dependency

```
    aaa
   ↗   ↖
bbb  ← ccc
        ↑
       ddd
```

Publishing should fulfill all these scenarios:
- If `aaa` is updated
    - publish `aaa`
- If `bbb` is updated
    - publish `bbb` 
    - publish `aaa` with `bbb` new version
- If `ccc` is updated
    - publish `ccc`
    - publish `bbb` with `ccc` new version
    - publish `aaa` with `bbb` and `ccc` new versions
- If `ddd` is updated
    - publish `ddd`
    - publish `ccc` with `ddd` new version
    - publish `bbb` with `ccc` new version
    - publish `aaa` with `bbb` and `ccc` new versions
    

## Result
It worked perfectly
