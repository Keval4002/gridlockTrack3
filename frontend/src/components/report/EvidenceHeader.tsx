'use client';

import React from 'react';
import { useAnalysisStore } from '@/store/analysisStore';
import type { Evidence } from '@/types';

interface EvidenceHeaderProps {
  evidence: Evidence;
}

export function EvidenceHeader({ evidence }: EvidenceHeaderProps) {
  const session = useAnalysisStore((s) => s.session);
  const sessionId = session.id;

  return (
    <div className="card rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
      {/* Annotated image */}
      {evidence.annotatedImageUrl && (
        <div className="relative bg-[#0a0a0a]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={evidence.annotatedImageUrl}
            alt="Annotated evidence image"
            className="w-full max-h-[480px] object-contain"
          />
        </div>
      )}

      {/* Surrounding bar showing ONLY Session ID */}
      <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-gray-400">Session ID:</span>
          <span className="text-xs font-mono font-semibold text-[#0a0a0a]">{sessionId}</span>
        </div>
      </div>
    </div>
  );
}
