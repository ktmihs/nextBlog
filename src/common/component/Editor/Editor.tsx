import React, {
	forwardRef,
	MutableRefObject,
	Ref,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react';
import Quill, { Delta, EmitterSource, Op, Range } from 'quill';
import 'quill/dist/quill.snow.css';

interface propsType {
	defaultValue: Delta | Op[];
	onTextChange: (
		delta: Delta,
		oldContent: Delta,
		source: EmitterSource,
	) => void;
	onSelectionChange: (
		range: Range,
		oldRange: Range,
		source: EmitterSource,
	) => void;
}

const Editor = forwardRef(
	(
		{ defaultValue, onTextChange, onSelectionChange }: propsType,
		ref: Ref<Quill>,
	) => {
		const toolbarRef = useRef(null);
		const containerRef = useRef(null);
		const defaultValueRef = useRef(defaultValue);
		const onTextChangeRef = useRef(onTextChange);
		const onSelectionChangeRef = useRef(onSelectionChange);

		useLayoutEffect(() => {
			onTextChangeRef.current = onTextChange;
			onSelectionChangeRef.current = onSelectionChange;
		});

		useEffect(() => {
			if (!containerRef.current || !toolbarRef.current) return;
			const container = containerRef.current as HTMLElement;
			const toolbar = toolbarRef.current as HTMLElement;
			const editorContainer = container.appendChild(
				container.ownerDocument.createElement('div'),
			);
			const quill = new Quill(editorContainer, {
				theme: 'snow',
				modules: {
					toolbar: toolbar,
				},
			});

			(ref as MutableRefObject<Quill>).current = quill;

			if (defaultValueRef.current) {
				quill.setContents(defaultValueRef.current);
			}

			quill.on(Quill.events.TEXT_CHANGE, (...args) => {
				onTextChangeRef.current?.(...args);
			});

			quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
				onSelectionChangeRef.current?.(...args);
			});

			return () => {
				(ref as MutableRefObject<null>).current = null;
				container.innerHTML = '';
			};
		}, [ref]);

		return (
			<section>
				<div ref={toolbarRef}>
					<span className="ql-formats">
						<select className="ql-font" aria-hidden="true"></select>
						<select className="ql-size" aria-hidden="true"></select>
					</span>
					<span className="ql-formats">
						<button className="ql-bold"></button>
						<button className="ql-italic"></button>
						<button className="ql-underline"></button>
						<button className="ql-strike"></button>
					</span>
					<span className="ql-formats">
						<select className="ql-color"></select>
						<select className="ql-background"></select>
					</span>
					<span className="ql-formats">
						<button className="ql-script" value="sub"></button>
						<button className="ql-script" value="super"></button>
					</span>
					<span className="ql-formats">
						<button className="ql-header" value="1"></button>
						<button className="ql-header" value="2"></button>
						<button className="ql-blockquote"></button>
						<button className="ql-code-block"></button>
					</span>
					<span className="ql-formats">
						<button className="ql-list" value="ordered"></button>
						<button className="ql-list" value="bullet"></button>
						<button className="ql-indent" value="-1"></button>
						<button className="ql-indent" value="+1"></button>
					</span>
					<span className="ql-formats">
						<button className="ql-direction" value="rtl"></button>
						<select className="ql-align"></select>
					</span>
					<span className="ql-formats">
						<button className="ql-link"></button>
						<button className="ql-image"></button>
						<button className="ql-video"></button>
						<button className="ql-formula"></button>
					</span>
					<span className="ql-formats">
						<button className="ql-clean"></button>
					</span>
				</div>
				<div ref={containerRef}></div>
			</section>
		);
	},
);

export default Editor;
