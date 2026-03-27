export function SocialProof() {
  const companies = [
    { name: 'Viggle', note: 'a16z-backed' },
    { name: 'MUFG', note: null },
    { name: 'Adaptavist', note: null },
  ];

  return (
    <div className="py-6 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-widest shrink-0">
          Team from
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {companies.map((company) => (
            <span key={company.name} className="text-sm font-semibold text-gray-300">
              {company.name}
              {company.note && (
                <span className="text-gray-600 font-normal text-xs ml-1">({company.note})</span>
              )}
            </span>
          ))}
          <span className="hidden sm:inline text-gray-700">|</span>
          <span className="text-sm text-gray-400">
            University of Waterloo <span className="text-gray-500 text-xs">MBET</span>
          </span>
        </div>
      </div>
    </div>
  );
}
