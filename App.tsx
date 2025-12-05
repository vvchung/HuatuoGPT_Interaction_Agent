import React, { useState } from 'react';
import Header from './components/Header';
import InputSection from './components/InputSection';
import ResultCard from './components/ResultCard';
import JsonViewer from './components/JsonViewer';
import { analyzeAbstract } from './services/geminiService';
import { AnalysisState } from './types';
import { BrainCircuit } from 'lucide-react';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [state, setState] = useState<AnalysisState>({
    status: 'idle',
    data: null
  });

  const handleAnalyze = async () => {
    if (!input.trim()) return;

    setState({ status: 'loading', data: null });

    try {
      const result = await analyzeAbstract(input);
      setState({ status: 'success', data: result });
    } catch (error) {
      console.error(error);
      setState({ 
        status: 'error', 
        data: null, 
        errorMessage: error instanceof Error ? error.message : "An unknown error occurred" 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">利用 HuatuoGPT 打造醫療文獻提取 Agent</h2>
          <p className="text-gray-600 leading-relaxed">
            本系統模擬 HuatuoGPT (w/ RLAIF) 的 Prompt Engineering 策略，能從 PubMed 摘要中自動識別「中西藥交互作用」並輸出結構化 JSON 數據。
          </p>
        </div>

        {/* Top Section: Input */}
        <section>
          <InputSection 
            input={input} 
            setInput={setInput} 
            onAnalyze={handleAnalyze}
            isLoading={state.status === 'loading'}
          />
        </section>

        {/* Bottom Section: Results */}
        {state.status !== 'idle' && (
          <section className="animate-fade-in-up">
            {state.status === 'error' ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center text-red-800">
                <p className="font-semibold">分析失敗</p>
                <p className="text-sm mt-1 opacity-80">{state.errorMessage}</p>
              </div>
            ) : state.status === 'loading' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 opacity-50 pointer-events-none">
                 <div className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                 <div className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
              </div>
            ) : state.data ? (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Visual Report */}
                <div className="lg:col-span-3">
                   <div className="mb-4 flex items-center gap-2 text-teal-800 font-semibold">
                      <BrainCircuit className="w-5 h-5" />
                      <h3>可視化報告 (Visual Report)</h3>
                   </div>
                  <ResultCard data={state.data} />
                </div>
                
                {/* JSON Data */}
                <div className="lg:col-span-2 flex flex-col">
                   <div className="mb-4 flex items-center gap-2 text-slate-700 font-semibold">
                      <BrainCircuit className="w-5 h-5" />
                      <h3>結構化數據 (JSON)</h3>
                   </div>
                  <JsonViewer data={state.data} />
                </div>
              </div>
            ) : null}
          </section>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2024 HuatuoGPT Interaction Agent Demo. For educational purpose only.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;