export interface Publication {
    publicaciones_id: number;
    publicaciones_titulo: string;
    publicaciones_tipo: string;
    publicaciones_imagen: string;
    publicaciones_descripcion: string;
    publicaciones_fecha: Date;
    publicaciones_autor: string;
    publicaciones_documento: string;
}

export interface Authority {
    id_autoridad: number;
    foto_autoridad: string;
    nombre_autoridad: string;
    cargo_autoridad: string;
    facebook_autoridad: string;
    telefone_autoridad: string;
    twitter_autoridads: string;
}

export interface Announcement {
    idconvocatorias: number;
    con_foto_portada: string;
    con_titulo: string;
    con_descripcion: string;
    con_estado: string;
    con_fecha_inicio: Date;
    con_fecha_fin: Date;
    tipo_conv_comun: TypeAnnouncemet[];
}

export interface Courses {
    iddetalle_cursos_academicos: number;
    det_img_portada: string;
    det_titulo: string;
    det_descripcion: string;
    det_costo: number;
    det_costo_ext: number;
    det_costo_profe: number;
    det_cupo_max: number;
    det_carga_horaria: number;
    det_lugar_curso: string;
    det_modalidad: string;
    det_fecha_ini: Date;
    det_fecha_fin: Date;
    det_codigo: string;
    det_hora_ini: string;
    det_grupo_whatssap: string;
    det_version: string;
    det_estado: string;
    idtipo_curso_otros: number;
    tipo_curso_otro: TypeCourse[];
    facilitadores: Facilitator[];
}

export interface Video {
    video_id: number;
    video_enlace: string;
    video_titulo: string;
    video_breve_descripcion: string;
    video_tipo: string;
    video_estado: number;
}

export interface Gaceta {
  gaceta_id: number;
  gaceta_titulo: string;
  gaceta_fecha: string;
  gaceta_estado: number;
  gaceta_tipo: string | null;
  gaceta_documento: string;
}

export interface TypeAnnouncemet {
    idtipo_conv_comun: number;
    tipo_conv_comun_titulo: string;
    tipo_conv_comun_estado: string;
}

export interface TypeCourse {
    idtipo_curso_otros: number;
    tipo_conv_curso_nombre: string;
    tipo_conv_curso_estado: string;
}

export interface Facilitator {
    id_facilitador: number;
    foto_facilitador: string;
    nombre_facilitador: string;
    cargo_facilitador: string;
    facebook_facilitador: string;
    celular_facilitador: string;
    descripcion_facilitador: string;
}