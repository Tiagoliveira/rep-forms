// ─────────────────────────────────────────────────────────────
//  FORM DEFINITIONS
//  To add a form: copy one of the objects below, give it a new
//  unique `id`, change the text, then bump VERSION in sw.js so
//  installed copies offer the update.
//
//  Row types:
//    { label, hints?, lines? }              – free-text box (lines = min height)
//    { label, type:'checks', options, other } – tick boxes (+ optional "Other")
//  `description` is the one-line summary shown on the home screen.
//
//  Checklists use kind:'checklist' and sections with `items` (plain
//  strings) instead of `rows`. Optional: `intro` {label, text} shown
//  above the first section, and `final` – a bold closing line.
// ─────────────────────────────────────────────────────────────
window.FORMS = [
  {
    id: 'pip-casework',
    title: 'Rep Casework Proforma – PIP Approach',
    org: 'USDAW Education',
    description: 'Problem, Investigate, Plan – for preparing a member’s case before meeting management.',
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
    id: 'grievance-prep',
    kind: 'checklist',
    title: 'Rep Grievance Preparation Checklist',
    org: 'USDAW Education',
    description: 'Decide the route, clarify the complaint, check the evidence and draft the grievance.',
    sections: [
      { num: 1, title: 'Decide the route', sub: 'Check the procedure, urgency and who needs to be involved', items: [
        'Check membership and any local arrangements for representation.',
        'Check the grievance policy: who receives it, time limits, informal stage, meeting and appeal arrangements.',
        'Confirm that a grievance is the right route. Consider whether an urgent health and safety, pay, collective, disciplinary, capability, sickness or equality issue also needs action.',
        'Record any immediate risk, deadline or temporary protection needed, and seek advice where necessary.',
      ]},
      { num: 2, title: 'Clarify the complaint', sub: 'Make it clear enough to investigate', items: [
        'State the complaint clearly in one or two sentences.',
        'Set out the key facts in date order: who, what, where, when, exact words or actions, and who witnessed them.',
        'Separate facts from opinion, assumptions and second-hand information. Stick to facts.',
        'Record what has already been raised informally, the response received and why the issue remains unresolved.',
        'Explain the impact on the member and whether the problem is continuing.',
        'Agree the specific and realistic outcome the member is seeking. Keep any fallback position for case planning.',
      ]},
      { num: 3, title: 'Check the evidence and rules', sub: 'Support the case and identify gaps', items: [
        'Gather relevant emails, messages, rotas, payslips, notes, records, photographs or other documents.',
        'Identify witnesses and what each person may be able to confirm.',
        'Check the contract, relevant policies, collective agreement and union guidance; note the page or paragraph references.',
        'Consider the employer’s likely response and what facts or evidence may be challenged.',
        'Seek advice on discrimination, reasonable adjustments, victimisation, possible dismissal, legal time limits or other complex issues.',
      ]},
      { num: 4, title: 'Draft and final check', sub: 'Help the member submit a clear, factual grievance', items: [
        'Clearly say that this is a formal grievance and address it to the correct person.',
        'Use a calm, professional tone. Avoid insults, unsupported accusations, threats and legal guarantees.',
        'Include the essential facts, previous attempts to resolve the issue, supporting evidence, impact and outcome sought.',
        'List any attachments and request a grievance meeting and trade union accompaniment where appropriate.',
        'The member must read, correct and approve the final wording. Sign and date it, keep a copy and record when and how it was submitted.',
      ]},
    ],
    final: 'FINAL CHECK: Could the manager understand exactly what is alleged, investigate it, and know what resolution the member is seeking?',
  },
  {
    id: 'grievance-meeting',
    kind: 'checklist',
    title: 'Representing Members in Grievances',
    org: 'USDAW Education',
    description: 'Before, during and after the grievance meeting – what to check and when.',
    intro: { label: 'CHECK THE RIGHT GUIDANCE:', text: 'Great Britain - Acas Code and guidance  |  Northern Ireland - LRA Code and guidance  |  Isle of Man - Employment Act 2006, Isle of Man Code and MIRS guidance. Your Recognition agreement may provide additional rights.' },
    sections: [
      { num: 1, title: 'Before the meeting', sub: 'Prepare the member and the case', items: [
        'Read the grievance, evidence, relevant policy and PIP notes. Agree the key points, desired outcome and any fallback position.',
        'Agree who will introduce the case, explain each point, answer questions and deliver the summary. The grievance remains the member’s case.',
        'Check who will attend, whether reasonable adjustments or communication support are needed, and whether the member has had reasonable time to prepare.',
        'If preparation has been inadequate, request a postponement before the meeting or an adjournment at the start, explaining what is still needed.',
      ]},
      { num: 2, title: 'At the start', sub: 'Clarify the meeting arrangements', items: [
        'Confirm the purpose of the meeting, the chair, the note-taker, everyone’s role, how the notes will be checked and when an outcome is expected.',
        'The chair should be able to consider the grievance fairly and with an open mind. Raise any specific conflict of interest, apparent bias or procedural concern.',
        'Remember that the meeting may identify further evidence, witnesses or investigation that must be completed before a decision is made.',
      ]},
      { num: 3, title: 'During the meeting', sub: 'Support the member without taking over', items: [
        'Use short, clear points. Help the member explain what happened, the evidence, the impact and the outcome they are seeking.',
        'Put and sum up the member’s case, respond to points made and confer privately with the member. Allow the member to answer questions directed to them.',
        'Ask relevant questions where the procedure, agreement or chair permits. Request an adjournment if the member is distressed, a new issue arises or you need to confer.',
        'Refer to policies and evidence. Ask to see any document quoted that you have not received, and identify important evidence or witnesses still to be considered.',
        'Keep your own notes. Ask for important points, disputed facts and procedural concerns to be included in the meeting record.',
        'If the meeting begins to consider possible misconduct by the member, ask the chair to clarify whether a separate process is required with proper notice and preparation.',
      ]},
      { num: 4, title: 'Before the meeting ends', sub: 'Confirm what happens next', items: [
        'Summarise the grievance, the strongest evidence and the outcome sought. Check that each part of the grievance has been understood.',
        'Ask what further investigation will take place, whether anything else is needed from the member, when the notes and written decision will be issued, and how delays will be explained.',
      ]},
      { num: 5, title: 'After the meeting', sub: 'Protect the record and follow up', items: [
        'Check the notes carefully. Request corrections or provide written comments. Signing should confirm the record only, not agreement with the outcome.',
        'Review the written decision against every grievance point, note the appeal deadline, agree next steps, monitor any poor treatment for raising the grievance, preserve confidentiality and seek advice where needed.',
      ]},
    ],
  },
  {
    id: 'casework-notes',
    title: 'Casework Notes – Continuation Sheet',
    org: '',
    description: 'Lined notes page for meetings, calls and follow-ups on a case.',
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
