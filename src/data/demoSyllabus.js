export const demoSyllabus = [
  {
    unit: 'Unit 1',
    title: 'Logic & Proofs',
    priority: 'Must do',
    progress: 72,
    topics: [
      { title: 'Propositions and truth tables', done: true, tag: 'easy' },
      { title: 'Logical equivalences', done: true, tag: 'scoring' },
      { title: 'Predicates and quantifiers', done: false, tag: 'must' },
      { title: 'Direct and contradiction proofs', done: false, tag: 'exam trap' }
    ]
  },
  {
    unit: 'Unit 2',
    title: 'Relations & Functions',
    priority: 'High yield',
    progress: 48,
    topics: [
      { title: 'Types of relations', done: true, tag: 'repeat' },
      { title: 'Equivalence relations', done: false, tag: 'must' },
      { title: 'Partial orders', done: false, tag: 'medium' },
      { title: 'Composition of functions', done: false, tag: 'quick win' }
    ]
  },
  {
    unit: 'Unit 3',
    title: 'Graph Theory',
    priority: 'Boss fight',
    progress: 31,
    topics: [
      { title: 'Walks, paths, circuits', done: true, tag: 'base' },
      { title: 'Euler and Hamiltonian graphs', done: false, tag: 'boss' },
      { title: 'Trees and spanning trees', done: false, tag: 'must' },
      { title: 'Graph coloring basics', done: false, tag: 'bonus' }
    ]
  }
];

export const formulas = [
  { name: 'Pigeonhole Principle', value: 'If n + 1 objects are placed into n boxes, one box has at least 2 objects.' },
  { name: 'Handshake Lemma', value: 'Sum of degrees of all vertices = 2 × number of edges.' },
  { name: 'Tree Edge Count', value: 'A tree with n vertices has exactly n - 1 edges.' },
  { name: 'Inclusion-Exclusion', value: '|A ∪ B| = |A| + |B| - |A ∩ B|' }
];
