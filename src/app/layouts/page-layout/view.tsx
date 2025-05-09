import { FC, ReactNode } from 'react';
import { cn } from '@/src/shared/utils';
import { Header } from '@/src/widgets/header';
import { Main } from '@/src/widgets/main';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { Toaster } from '@/src/shared/components/ui/toaster';

type Props = {
	children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => {
	return (
		<div
			className={cn(
				'relative container bg-background flex flex-col h-screen justify-between'
			)}
		>
			<Header />
			<Main>{children}</Main>
			<Toaster />
		</div>
	);
};
