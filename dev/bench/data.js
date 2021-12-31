window.BENCHMARK_DATA = {
  lastUpdate: 1640921312613,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'messense@icloud.com',
            name: 'messense',
            username: 'messense',
          },
          committer: {
            email: 'noreply@github.com',
            name: 'GitHub',
            username: 'web-flow',
          },
          distinct: true,
          id: 'ca3790bdf1654498e30f7f524a05d85650f6ba5b',
          message:
            'Add support for cross compilation with Zig (#983)\n\nfeat(cli): add support for cross compilation with Zig',
          timestamp: '2021-12-31T11:20:55+08:00',
          tree_id: 'bf280712bd630749c1cd8cc11ba2e34a3963ed83',
          url: 'https://github.com/napi-rs/napi-rs/commit/ca3790bdf1654498e30f7f524a05d85650f6ba5b',
        },
        date: 1640921310897,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 49755417,
            range: '±1.69%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 737117576,
            range: '±0.49%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 16719359,
            range: '±0.97%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 741718321,
            range: '±0.6%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 329019,
            range: '±9.97%',
            unit: 'ops/sec',
            extra: '63 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1730751,
            range: '±1.76%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 38309,
            range: '±0.6%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6747,
            range: '±0.66%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6698,
            range: '±0.53%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 15530,
            range: '±0.85%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 9649,
            range: '±1.1%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12392,
            range: '±1.11%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 377932,
            range: '±5.39%',
            unit: 'ops/sec',
            extra: '73 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 335924,
            range: '±4.99%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 347176,
            range: '±5.07%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 300244,
            range: '±5.05%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 46560,
            range: '±1.9%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 456,
            range: '±3.28%',
            unit: 'ops/sec',
            extra: '64 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 28045,
            range: '±2.54%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1954,
            range: '±1.7%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Query#query * 1',
            value: 25164,
            range: '±3.16%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
        ],
      },
    ],
  },
}
