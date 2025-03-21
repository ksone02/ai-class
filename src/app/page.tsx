import { PromptForm } from '@/components/prompt-form';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">AI 기획안 생성기</h1>
      <PromptForm />
    </div>
  );
}
