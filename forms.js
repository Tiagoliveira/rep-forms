// ─────────────────────────────────────────────────────────────
//  FORM DEFINITIONS
//  To add a form: copy one of the objects below, give it a new
//  unique `id`, change the text, then bump VERSION in sw.js so
//  installed copies offer the update.
//
//  Row types:
//    { label, hints?, lines? }              – free-text box (lines = min height)
//    { label, type:'checks', options, other } – tick boxes (+ optional "Other")
// ─────────────────────────────────────────────────────────────
window.FORMS = [
  {
    id: 'pip-casework',
    title: 'Rep Casework Proforma – PIP Approach',
    org: 'USDAW Education',
    header: [
      ['Member name', 'Workplace / department'],
      ['Manager', 'Date issue raised'],
    ],
    sections: [
      { num: 1, title: 'Problem', sub: 'Clarify the issue and the member’s priorities', rows: [
        { label: 'What is happening? What does the member want?', lines: 3 },
        { label: 'Any urgent deadlines, immediate risks or action needed?', lines: 2 },
      ]},
      { num: 2, title: 'Investigate', sub: 'Check the facts, documents and process', rows: [
        { label: 'Documents checked, and references noted', type: 'checks', other: true, lines: 3,
          options: ['Employment contract', 'Relevant policy', 'Previous warnings / history',
                    'Collective agreement', 'Code of Practice e.g. ACAS / HSE'] },
        { label: 'What evidence/argument is the employer relying on?', lines: 2 },
        { label: 'Is the process/policy/law being followed?', lines: 2 },
        { label: 'What information or evidence do you still need to gather?', lines: 2 },
      ]},
      { num: 3, title: 'Plan', sub: 'Agree on the outcome, strategy and next steps', rows: [
        { label: 'What outcome are you aiming for? What is the fallback position? (if any)', lines: 2 },
        { label: 'What is your strategy? (For example: informal discussion, formal procedure, seek advice)', lines: 2 },
        { label: 'Key points to raise with management', lines: 6,
          hints: ['Contract/law/policy', 'Good personal standing', 'Effect on Employer e.g. costs/morale',
                  'Evidence and witnesses', 'Comparison and precedents', 'Training and supervision'] },
        { label: 'Expected management responses and your counterarguments', lines: 3 },
        { label: 'Next steps and deadlines', lines: 2 },
        { label: 'Is this an organising issue? If yes, what action is needed?', lines: 2 },
      ]},
    ],
  },
  {
    id: 'casework-notes',
    title: 'Casework Notes – Continuation Sheet',
    org: '',
    header: [
      ['Member name', 'Date'],
      ['Rep', 'Page'],
    ],
    sections: [
      { title: 'Notes', sub: 'Meetings, calls and follow-ups', rows: [
        { label: 'Notes', lines: 26 },
      ]},
    ],
  },
];
