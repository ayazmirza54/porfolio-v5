export default function handler(req, res) {
  const RST  = '\x1b[0m';
  const GRN  = '\x1b[38;5;82m';
  const AMB  = '\x1b[38;5;214m';
  const CYN  = '\x1b[38;5;51m';
  const DIM  = '\x1b[38;5;240m';
  const GRY  = '\x1b[38;5;245m';
  const WHT  = '\x1b[97m';
  const BLD  = '\x1b[1m';

  const card = `
${GRN}${BLD}  █████╗ ██╗   ██╗ █████╗ ███████╗${RST}
${GRN}${BLD} ██╔══██╗╚██╗ ██╔╝██╔══██╗╚══███╔╝${RST}
${GRN}${BLD} ███████║ ╚████╔╝ ███████║  ███╔╝ ${RST}
${GRN}${BLD} ██╔══██║  ╚██╔╝  ██╔══██║ ███╔╝  ${RST}
${GRN}${BLD} ██║  ██║   ██║   ██║  ██║███████╗${RST}
${GRN}${BLD} ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝${RST}

  ${AMB}${BLD}Ayaz Mirza${RST}  ${DIM}·${RST}  ${GRY}Senior Consultant @ Wipro${RST}  ${DIM}·${RST}  ${GRY}Data Engineer${RST}
  ${DIM}────────────────────────────────────────────${RST}

  ${GRN}▸ ABOUT${RST}
  ${WHT}6+ years building data pipelines across telecom & banking${RST}
  ${GRY}Specializing in Ab Initio ETL and multi-cloud platforms${RST}
  ${DIM}Lucknow, India  ·  Open to Delhi NCR / Bangalore${RST}

  ${GRN}▸ STACK${RST}
  ${AMB}Ab Initio  ${DIM}│${RST}  ${WHT}GDE · Control Center · EME · Metadata Hub · Auth Gateway${RST}
  ${AMB}Languages  ${DIM}│${RST}  ${WHT}Python · Shell · Ansible${RST}
  ${AMB}Cloud      ${DIM}│${RST}  ${WHT}GCP · AWS · Azure${RST}
  ${AMB}Certs      ${DIM}│${RST}  ${CYN}✓ GCP Associate Cloud Engineer${RST}
  ${AMB}Studying   ${DIM}│${RST}  ${DIM}AWS Solutions Architect · GCP GenAI Leader${RST}

  ${GRN}▸ CURRENTLY${RST}
  ${GRY}Ab Initio platform team  ·  Aldermore Bank (UK)${RST}

  ${GRN}▸ WEEKEND BUILDS${RST}
  ${CYN}SATURDAY    ${RST}${DIM}Voice AI desktop assistant · Electron + Gemini 2.5${RST}
  ${CYN}DraftBuddy  ${RST}${DIM}EN/HI/Hinglish → polished platform-ready copy${RST}
  ${CYN}DevVault    ${RST}${DIM}Personal dev knowledge base · Tauri + Rust + Claude${RST}
  ${CYN}DrawAI      ${RST}${DIM}Natural language diagram canvas · React + Claude API${RST}

  ${GRN}▸ FIND ME${RST}
  ${CYN}🌐  ayazmirza54.in${RST}
  ${CYN}🐙  github.com/ayazmirza54${RST}
  ${CYN}💼  linkedin.com/in/ayazmirza54${RST}

  ${DIM}────────────────────────────────────────────${RST}
  ${DIM}curl ayazmirza54.in/dev  ·  made with ♥ & bash${RST}
  ${DIM}────────────────────────────────────────────${RST}
`;

  res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.send(card);
}