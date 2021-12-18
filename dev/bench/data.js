window.BENCHMARK_DATA = {
  lastUpdate: 1639811703935,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'noreply@github.com',
            name: 'GitHub',
            username: 'web-flow',
          },
          distinct: true,
          id: '45a74856d6a9fb79446f11716a779dc6079927ca',
          message:
            "Merge pull request #941 from napi-rs/fix/build-env\n\nfix(build): keep `.d.ts` and `.js` untouched if native doesn't change",
          timestamp: '2021-12-18T15:07:26+08:00',
          tree_id: 'b90c9a7a8ff4024de248a050b6b5eefd11a21b5d',
          url: 'https://github.com/napi-rs/napi-rs/commit/45a74856d6a9fb79446f11716a779dc6079927ca',
        },
        date: 1639811701875,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 52889383,
            range: '±1.03%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 712897300,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 18354838,
            range: '±0.53%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 712690446,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 372449,
            range: '±8.42%',
            unit: 'ops/sec',
            extra: '60 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1888801,
            range: '±1.68%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 39124,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7854,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7792,
            range: '±0.16%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 16567,
            range: '±0.65%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 10571,
            range: '±0.07%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12504,
            range: '±0.04%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 406396,
            range: '±4.81%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 341071,
            range: '±4.49%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 371586,
            range: '±4.36%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 329612,
            range: '±4.59%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 40788,
            range: '±1.47%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 410,
            range: '±2.44%',
            unit: 'ops/sec',
            extra: '68 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 29622,
            range: '±0.55%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'Query#query * 100',
            value: 2175,
            range: '±1.22%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'Query#query * 1',
            value: 30381,
            range: '±2.19%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
        ],
      },
    ],
  },
}
